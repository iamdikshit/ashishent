// ─────────────────────────────────────────────
// Team Notification Email HTML
// ─────────────────────────────────────────────
export default function buildTeamEmail(data: {
    name: string;
    company: string;
    email: string;
    phone: string;
    product: string;
    message: string;
    refId: string;
    submittedAt: string;
}): string {
    return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<title>New Inquiry – Ashish Enterprises</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');
  *{margin:0;padding:0;box-sizing:border-box}
  body{font-family:'DM Sans',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#f1f5f9;-webkit-font-smoothing:antialiased;color:#1e293b}
  .wrap{width:100%;background:#f1f5f9;padding:40px 16px}
  .container{max-width:600px;margin:0 auto}
  .header{background:linear-gradient(135deg,#4f46e5 0%,#7c3aed 100%);border-radius:20px 20px 0 0;padding:36px 40px 32px;text-align:center;position:relative;overflow:hidden}
  .dot-bg{position:absolute;inset:0;background-image:radial-gradient(circle,rgba(255,255,255,.12) 1px,transparent 1px);background-size:20px 20px}
  .logo-wrap{display:inline-flex;align-items:center;gap:10px;margin-bottom:20px;position:relative}
  .logo-icon{width:40px;height:40px;background:rgba(255,255,255,.15);border:1px solid rgba(255,255,255,.25);border-radius:10px;display:inline-flex;align-items:center;justify-content:center}
  .logo-text{font-size:22px;font-weight:700;color:#fff;letter-spacing:-.3px}
  .logo-dot{color:#a5b4fc}
  .badge{display:inline-flex;align-items:center;gap:6px;background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.2);border-radius:100px;padding:5px 14px;margin-bottom:16px;position:relative}
  .badge-dot{width:6px;height:6px;background:#a5b4fc;border-radius:50%}
  .badge-text{font-size:11px;font-weight:600;color:#c7d2fe;text-transform:uppercase;letter-spacing:1.2px}
  .h-title{font-size:26px;font-weight:700;color:#fff;line-height:1.3;position:relative}
  .body{background:#fff;padding:40px;border-left:1px solid #e2e8f0;border-right:1px solid #e2e8f0}
  .meta-row{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;margin-bottom:24px}
  .meta-pill{display:inline-flex;align-items:center;gap:5px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:100px;padding:4px 12px;font-size:11.5px;color:#64748b;font-weight:500}
  .meta-green{width:5px;height:5px;background:#22c55e;border-radius:50%}
  .greeting{font-size:15px;color:#475569;margin-bottom:24px;line-height:1.6}
  .greeting strong{color:#1e293b}
  .sec-label{display:flex;align-items:center;gap:8px;margin-bottom:14px}
  .sec-line{flex:1;height:1px;background:linear-gradient(to right,#e2e8f0,transparent)}
  .sec-text{font-size:10px;font-weight:700;color:#94a3b8;text-transform:uppercase;letter-spacing:1.4px;white-space:nowrap}
  .info-table{width:100%;border-collapse:collapse;margin-bottom:28px;border-radius:14px;overflow:hidden;border:1px solid #e2e8f0}
  .info-table tr td{padding:13px 16px;font-size:13.5px;border-bottom:1px solid #f1f5f9;vertical-align:top}
  .info-table tr:last-child td{border-bottom:none}
  .info-table tr:nth-child(even) td{background:#f8fafc}
  .lbl{font-weight:600;color:#64748b;width:38%;white-space:nowrap}
  .lbl-icon{display:inline-block;width:20px;height:20px;border-radius:6px;background:#eef2ff;text-align:center;line-height:20px;font-size:11px;margin-right:6px;vertical-align:middle}
  .val{color:#1e293b;font-weight:500}
  .product-tag{display:inline-block;background:#eef2ff;border:1px solid #c7d2fe;color:#4f46e5;font-size:12px;font-weight:600;padding:5px 12px;border-radius:100px}
  .msg-block{background:#f8fafc;border:1px solid #e2e8f0;border-left:3px solid #6366f1;border-radius:12px;padding:18px 20px;margin-bottom:28px}
  .msg-block p{font-size:14px;color:#475569;line-height:1.7}
  .divider{height:1px;background:linear-gradient(to right,transparent,#e2e8f0 30%,#e2e8f0 70%,transparent);margin:32px 0}
  .cta-wrap{text-align:center;margin:32px 0 8px}
  .cta-btn{display:inline-block;background:linear-gradient(135deg,#4f46e5,#7c3aed);color:#fff!important;text-decoration:none;font-size:14px;font-weight:700;padding:14px 36px;border-radius:12px;letter-spacing:.2px}
  .cta-sub{text-align:center;font-size:12px;color:#94a3b8;margin-top:10px}
  .qa-label{font-size:12px;font-weight:600;color:#94a3b8;text-transform:uppercase;letter-spacing:1px;text-align:center;margin-bottom:14px}
  .qa-wrap{display:flex;gap:10px;justify-content:center;flex-wrap:wrap;margin-bottom:28px}
  .qa-btn{display:inline-block;border:1px solid #c7d2fe;background:#eef2ff;color:#4f46e5!important;text-decoration:none;font-size:12px;font-weight:600;padding:8px 16px;border-radius:8px}
  .note{background:#fffbeb;border:1px solid #fde68a;border-radius:12px;padding:14px 18px;display:flex;gap:10px;align-items:flex-start}
  .note-title{font-size:12px;font-weight:700;color:#92400e;margin-bottom:3px}
  .note-body{font-size:12px;color:#78350f;line-height:1.6}
  .footer{background:#1e293b;border-radius:0 0 20px 20px;padding:32px 40px;text-align:center}
  .f-logo{font-size:16px;font-weight:700;color:#fff;margin-bottom:6px}
  .f-logo span{color:#818cf8}
  .f-tag{font-size:12px;color:#64748b;margin-bottom:20px}
  .f-links{margin-bottom:20px}
  .f-link{display:inline-block;font-size:12px;color:#94a3b8!important;text-decoration:none;margin:0 10px}
  .f-contact{font-size:12px;color:#475569;margin-bottom:16px;line-height:1.8}
  .f-contact a{color:#818cf8!important;text-decoration:none}
  .f-divider{height:1px;background:#334155;margin:20px 0}
  .f-fine{font-size:11px;color:#475569;line-height:1.7}
  @media(max-width:600px){.wrap{padding:20px 12px}.header{padding:28px 24px 24px}.body{padding:28px 20px}.footer{padding:24px 20px}.h-title{font-size:20px}.meta-row{flex-direction:column}.qa-wrap{flex-direction:column;align-items:center}}
</style>
</head>
<body>
<div class="wrap">
<div class="container">

  <!-- Header -->
  <div class="header">
    <div class="dot-bg"></div>
    <div class="logo-wrap">
      <div class="logo-icon">
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="white" stroke-width="2.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/>
        </svg>
      </div>
      <span class="logo-text">Ashish Enterprises<span class="logo-dot">.</span></span>
    </div>
    <div><div class="badge"><div class="badge-dot"></div><span class="badge-text">New Inquiry Received</span></div></div>
    <div class="h-title">You've received a new<br/>product inquiry 📦</div>
  </div>

  <!-- Body -->
  <div class="body">
    <div class="meta-row">
      <div class="meta-pill"><div class="meta-green"></div>Just now · ${data.submittedAt}</div>
      <div class="meta-pill">Via Website Contact Form</div>
    </div>

    <p class="greeting">Hello <strong>Team</strong>,<br/><br/>A new inquiry has been submitted through the website contact form. Please find the details below and follow up at your earliest convenience.</p>

    <div class="sec-label"><span class="sec-text">Sender Details</span><div class="sec-line"></div></div>
    <table class="info-table">
      <tr><td class="lbl"><span class="lbl-icon">👤</span>Name</td><td class="val">${data.name}</td></tr>
      <tr><td class="lbl"><span class="lbl-icon">🏢</span>Company</td><td class="val">${data.company || "—"}</td></tr>
      <tr><td class="lbl"><span class="lbl-icon">📧</span>Email</td><td class="val"><a href="mailto:${data.email}" style="color:#4f46e5;text-decoration:none;font-weight:600;">${data.email}</a></td></tr>
      <tr><td class="lbl"><span class="lbl-icon">📞</span>Phone</td><td class="val">${data.phone ? `<a href="tel:${data.phone}" style="color:#4f46e5;text-decoration:none;font-weight:600;">${data.phone}</a>` : "—"}</td></tr>
    </table>

    <div class="sec-label"><span class="sec-text">Inquiry Details</span><div class="sec-line"></div></div>
    <table class="info-table" style="margin-bottom:16px">
      <tr><td class="lbl"><span class="lbl-icon">📦</span>Product</td><td class="val"><span class="product-tag">${data.product || "Not specified"}</span></td></tr>
      <tr><td class="lbl"><span class="lbl-icon">🕐</span>Submitted</td><td class="val">${data.submittedAt}</td></tr>
      <tr><td class="lbl"><span class="lbl-icon">🔖</span>Reference</td><td class="val" style="color:#94a3b8;font-family:monospace;font-size:12px">#${data.refId}</td></tr>
    </table>

    <div class="sec-label"><span class="sec-text">Customer Message</span><div class="sec-line"></div></div>
    <div class="msg-block"><p>${data.message}</p></div>

    <div class="cta-wrap">
      <a href="mailto:${data.email}?subject=Re: Product Inquiry – ${data.product} [#${data.refId}]" class="cta-btn">✉️ &nbsp; Reply to Customer</a>
      <p class="cta-sub">Respond within 24 hours for best customer experience</p>
    </div>

    <div class="divider"></div>

    <p class="qa-label">Quick Actions</p>
    <div class="qa-wrap">
      ${data.phone ? `<a href="tel:${data.phone}" class="qa-btn">📞 &nbsp; Call Customer</a>` : ""}
    
      ${data.phone ? `<a href="https://wa.me/${data.phone.replace(/\D/g, "")}" class="qa-btn">💬 &nbsp; WhatsApp</a>` : ""}
      <a href="mailto:${data.email}" class="qa-btn">📧 &nbsp; Send Email</a>
    </div>

    <div class="note">
      <span style="font-size:18px;line-height:1">⚠️</span>
      <div>
        <p class="note-title">Internal Note</p>
        <p class="note-body">This inquiry was submitted via the public contact form. Verify customer details before sharing pricing. Log with reference <strong>#${data.refId}</strong>.</p>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <div class="footer">
    <div class="f-logo">Ashish Enterprises<span>.</span></div>
    <div class="f-tag">Premium Textile Importer · Est. 2020 · Delhi, India</div>
    <div class="f-links">
      <a href="${process.env.NEXT_PUBLIC_SITE_URL}" class="f-link">Website</a>
      <a href="${process.env.NEXT_PUBLIC_SITE_URL}/products" class="f-link">Products</a>
      <a href="${process.env.NEXT_PUBLIC_SITE_URL}/contact" class="f-link">Contact</a>
    </div>
    <div class="f-contact">
      📍 Gandhi Nagar, Delhi – 110031, India<br/>
      📞 <a href="tel:+919876543210">+91 98765 43210</a> &nbsp;|&nbsp;
      📧 <a href="mailto:hello@ashishenterprises.com">hello@ashishenterprises.com</a>
    </div>
    <div class="f-divider"></div>
    <div class="f-fine">This is an automated notification. Do not reply directly to this email.<br/>© ${new Date().getFullYear()} Ashish Enterprises. All rights reserved.</div>
  </div>

</div>
</div>
</body>
</html>`;
}