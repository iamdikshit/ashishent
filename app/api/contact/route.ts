import { NextRequest, NextResponse } from "next/server";
import buildUserEmail from "@/components/emailTemplate/buildUserEmail";
import buildTeamEmail from "@/components/emailTemplate/buildTeamEmail";
import nodemailer from "nodemailer";

// ─────────────────────────────────────────────
// In-memory rate limit store
// { [ip]: { count: number; firstRequest: number } }
// For production, replace with Redis (e.g. Upstash)
// ─────────────────────────────────────────────
const rateLimitMap = new Map<string, { count: number; firstRequest: number }>();

const RATE_LIMIT_MAX = 3;          // max requests
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes in ms

function getRateLimitStatus(ip: string): {
    allowed: boolean;
    remaining: number;
    resetInMs: number;
} {
    const now = Date.now();
    const record = rateLimitMap.get(ip);

    if (!record) {
        rateLimitMap.set(ip, { count: 1, firstRequest: now });
        return { allowed: true, remaining: RATE_LIMIT_MAX - 1, resetInMs: RATE_LIMIT_WINDOW };
    }

    const elapsed = now - record.firstRequest;

    // Window expired — reset
    if (elapsed > RATE_LIMIT_WINDOW) {
        rateLimitMap.set(ip, { count: 1, firstRequest: now });
        return { allowed: true, remaining: RATE_LIMIT_MAX - 1, resetInMs: RATE_LIMIT_WINDOW };
    }

    // Within window — check count
    if (record.count >= RATE_LIMIT_MAX) {
        const resetInMs = RATE_LIMIT_WINDOW - elapsed;
        return { allowed: false, remaining: 0, resetInMs };
    }

    // Increment
    record.count += 1;
    rateLimitMap.set(ip, record);
    return {
        allowed: true,
        remaining: RATE_LIMIT_MAX - record.count,
        resetInMs: RATE_LIMIT_WINDOW - elapsed,
    };
}

// ─────────────────────────────────────────────
// Helper: format reset time as "X min Y sec"
// ─────────────────────────────────────────────
function formatResetTime(ms: number): string {
    const totalSeconds = Math.ceil(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    if (minutes === 0) return `${seconds} second${seconds !== 1 ? "s" : ""}`;
    if (seconds === 0) return `${minutes} minute${minutes !== 1 ? "s" : ""}`;
    return `${minutes} min ${seconds} sec`;
}

// ─────────────────────────────────────────────
// Nodemailer transporter
// ─────────────────────────────────────────────
function createTransporter() {
    return nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: process.env.SMTP_SECURE === "true", // true for 465, false for 587
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });
}

// ─────────────────────────────────────────────
// Generate reference ID
// ─────────────────────────────────────────────
function generateRefId(): string {
    const year = new Date().getFullYear();
    const rand = Math.floor(10000 + Math.random() * 90000);
    return `INQ-${year}-${rand}`;
}

// ─────────────────────────────────────────────
// Format date for email
// ─────────────────────────────────────────────
function formatDate(): string {
    return new Intl.DateTimeFormat("en-IN", {
        dateStyle: "long",
        timeStyle: "short",
        timeZone: "Asia/Kolkata",
    }).format(new Date()) + " IST";
}




// ─────────────────────────────────────────────
// POST /api/contact
// ─────────────────────────────────────────────
export async function POST(req: NextRequest) {
    // 1. Get client IP
    const ip =
        req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
        req.headers.get("x-real-ip") ||
        "unknown";

    // 2. Rate limit check
    const { allowed, remaining, resetInMs } = getRateLimitStatus(ip);

    if (!allowed) {
        return NextResponse.json(
            {
                success: false,
                error: `Too many requests. You can send a maximum of ${RATE_LIMIT_MAX} inquiries every 15 minutes. Please try again in ${formatResetTime(resetInMs)}.`,
                retryAfter: Math.ceil(resetInMs / 1000),
            },
            {
                status: 429,
                headers: {
                    "Retry-After": String(Math.ceil(resetInMs / 1000)),
                    "X-RateLimit-Limit": String(RATE_LIMIT_MAX),
                    "X-RateLimit-Remaining": "0",
                    "X-RateLimit-Reset": String(Date.now() + resetInMs),
                },
            }
        );
    }

    // 3. Parse & validate body
    let body: {
        name?: string;
        company?: string;
        email?: string;
        phone?: string;
        product?: string;
        message?: string;
    };

    try {
        body = await req.json();
    } catch {
        return NextResponse.json(
            { success: false, error: "Invalid request body." },
            { status: 400 }
        );
    }

    const { name, company = "", email, phone = "", product = "", message } = body;

    // Required field validation
    if (!name?.trim()) {
        return NextResponse.json({ success: false, error: "Name is required." }, { status: 400 });
    }
    if (!email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return NextResponse.json({ success: false, error: "A valid email is required." }, { status: 400 });
    }
    if (!message?.trim()) {
        return NextResponse.json({ success: false, error: "Message is required." }, { status: 400 });
    }

    // 4. Build shared data
    const refId = generateRefId();
    const submittedAt = formatDate();

    const emailData = {
        name: name.trim(),
        company: company.trim(),
        email: email.trim(),
        phone: phone.trim(),
        product: product.trim(),
        message: message.trim(),
        refId,
        submittedAt,
    };

    // 5. Send emails
    try {
        const transporter = createTransporter();

        await Promise.all([
            // Team notification
            transporter.sendMail({
                from: `"Ashish Enterprises" <${process.env.SMTP_USER}>`,
                to: process.env.TEAM_EMAIL || process.env.SMTP_USER,
                replyTo: emailData.email,
                subject: `New Inquiry from ${emailData.name} – ${emailData.product || "General"} [#${refId}]`,
                html: buildTeamEmail(emailData),
            }),

            // User confirmation
            transporter.sendMail({
                from: `"Ashish Enterprises" <${process.env.SMTP_USER}>`,
                to: emailData.email,
                subject: `We received your inquiry [#${refId}] – Ashish Enterprises`,
                html: buildUserEmail(emailData),
            }),
        ]);

        return NextResponse.json(
            {
                success: true,
                message: "Your inquiry has been sent successfully. Check your email for confirmation.",
                refId,
                rateLimit: {
                    remaining,
                    resetInMs,
                },
            },
            {
                status: 200,
                headers: {
                    "X-RateLimit-Limit": String(RATE_LIMIT_MAX),
                    "X-RateLimit-Remaining": String(remaining),
                    "X-RateLimit-Reset": String(Date.now() + resetInMs),
                },
            }
        );
    } catch (error) {
        console.error("[Contact API] Email send error:", error);
        return NextResponse.json(
            {
                success: false,
                error: "Failed to send email. Please try again or contact us directly.",
            },
            { status: 500 }
        );
    }
}

// Block non-POST methods
export async function GET() {
    return NextResponse.json({ error: "Method not allowed." }, { status: 405 });
}