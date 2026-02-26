"use client";

import { useState } from "react";

const products = [
    "Hosiery Rags",
    "Chinese Carpets",
    "Polyester Knitted Fabric",
    "Polyester Woven Fabric",
    "NR Knitted Fabrics",
    "Pile Knitted Fabrics",
    "Other / Custom Requirement",
];

const contactInfo = [
    {
        label: "Email Us",
        value: "info@ashishent.com",
        sub: "We reply within 24 hours",
        href: "mailto:info@ashishent.com",
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
    },
    {
        label: "Call Us",
        value: "+91 98765 43210",
        sub: "Mon – Sat, 9 AM – 7 PM",
        href: "tel:+919876543210",
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
        ),
    },
    {
        label: "Visit Us",
        value: "Gandhi Nagar, Delhi – 110031",
        sub: "India's largest textile market",
        href: "https://maps.google.com",
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
    },
];

type FormState = {
    name: string;
    company: string;
    email: string;
    phone: string;
    product: string;
    message: string;
};

type TouchedState = Partial<Record<keyof FormState, boolean>>;

export default function ContactUs() {
    const [form, setForm] = useState<FormState>({
        name: "",
        company: "",
        email: "",
        phone: "",
        product: "",
        message: "",
    });

    const [touched, setTouched] = useState<TouchedState>({});
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setTouched({ ...touched, [e.target.name]: true });
    };

    const errors: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) errors.name = "Name is required.";
    if (!form.email.trim()) errors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = "Enter a valid email.";
    if (form.phone && !/^[0-9+\s\-()]{7,15}$/.test(form.phone)) errors.phone = "Enter a valid phone number.";
    if (!form.message.trim()) errors.message = "Please enter your message.";

    const isValid = Object.keys(errors).length === 0;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setTouched({ name: true, company: true, email: true, phone: true, product: true, message: true });
        if (!isValid) return;
        setLoading(true);
        await new Promise((r) => setTimeout(r, 1500)); // simulate API
        setLoading(false);
        setSubmitted(true);
    };

    const inputBase =
        "w-full rounded-xl border bg-white px-4 py-3 text-sm text-slate-800 placeholder-slate-400 outline-none transition-all duration-200 focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-400";
    const inputNormal = "border-slate-200 hover:border-slate-300";
    const inputError = "border-red-300 focus:border-red-400 focus:ring-red-400/20";

    const fieldClass = (field: keyof FormState) =>
        `${inputBase} ${touched[field] && errors[field] ? inputError : inputNormal}`;

    return (
        <section className="relative bg-white py-20 lg:py-28 overflow-hidden">

            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-50 rounded-full blur-3xl opacity-70 translate-x-1/3 -translate-y-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-50 rounded-full blur-3xl opacity-70 -translate-x-1/3 translate-y-1/3 pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* ── Section Header ── */}
                <div className="text-center mb-14">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-200 bg-indigo-50 mb-5">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
                        <span className="text-xs font-semibold text-indigo-600 uppercase tracking-widest">
              Get In Touch
            </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-4">
                        Contact{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
              Us
            </span>
                    </h2>
                    <p className="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
                        Have a sourcing requirement or want to know more about our products? Fill in the form and our team will get back to you promptly.
                    </p>
                    <div className="flex items-center justify-center gap-3 mt-6">
                        <div className="h-px w-16 bg-gradient-to-r from-transparent to-indigo-400" />
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                        <div className="h-px w-16 bg-gradient-to-l from-transparent to-indigo-400" />
                    </div>
                </div>

                {/* ── Main Grid ── */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

                    {/* Left — Contact Info */}
                    <div className="lg:col-span-2 space-y-5">

                        {/* Info cards */}
                        {contactInfo.map((info) => (
                            <a
                                key={info.label}
                                href={info.href}
                                target={info.href.startsWith("http") ? "_blank" : undefined}
                                rel="noopener noreferrer"
                                className="group flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-indigo-200 hover:bg-white hover:shadow-lg hover:shadow-indigo-50 hover:-translate-y-0.5 transition-all duration-300"
                            >
                                <div className="w-11 h-11 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600 transition-all duration-300">
                                    {info.icon}
                                </div>
                                <div>
                                    <p className="text-xs font-semibold text-indigo-500 uppercase tracking-widest mb-1">{info.label}</p>
                                    <p className="text-sm font-semibold text-slate-800 group-hover:text-indigo-700 transition-colors duration-200">{info.value}</p>
                                    <p className="text-xs text-slate-400 mt-0.5">{info.sub}</p>
                                </div>
                            </a>
                        ))}

                        {/* Business hours */}
                        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                            <h4 className="text-sm font-semibold text-slate-700 mb-4 flex items-center gap-2">
                                <svg className="w-4 h-4 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Business Hours
                            </h4>
                            <div className="space-y-2">
                                {[
                                    { day: "Monday – Friday", time: "9:00 AM – 7:00 PM" },
                                    { day: "Saturday", time: "9:00 AM – 5:00 PM" },
                                    { day: "Sunday", time: "Closed" },
                                ].map((row) => (
                                    <div key={row.day} className="flex items-center justify-between text-xs">
                                        <span className="text-slate-500">{row.day}</span>
                                        <span className={`font-semibold ${row.time === "Closed" ? "text-red-400" : "text-slate-700"}`}>
                      {row.time}
                    </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Social links */}

                    </div>

                    {/* Right — Form */}
                    <div className="lg:col-span-3">
                        <div className="bg-white rounded-2xl border border-slate-200 shadow-xl shadow-slate-100 overflow-hidden">

                            {/* Form header */}
                            <div className="h-1.5 w-full bg-gradient-to-r from-indigo-600 via-violet-500 to-indigo-400" />

                            <div className="p-7 sm:p-9">
                                {submitted ? (
                                    /* ── Success State ── */
                                    <div className="flex flex-col items-center justify-center text-center py-12 gap-4">
                                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-xl shadow-indigo-200 mb-2">
                                            <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <h3 className="text-2xl font-bold text-slate-900">Message Sent!</h3>
                                        <p className="text-slate-500 text-sm max-w-sm leading-relaxed">
                                            Thank you for reaching out to Ashish Enterprises. Our team will get back to you within 24 hours.
                                        </p>
                                        <button
                                            onClick={() => { setSubmitted(false); setForm({ name: "", company: "", email: "", phone: "", product: "", message: "" }); setTouched({}); }}
                                            className="mt-4 px-6 py-2.5 rounded-xl border border-indigo-200 text-indigo-600 text-sm font-semibold hover:bg-indigo-50 transition-colors duration-200"
                                        >
                                            Send Another Message
                                        </button>
                                    </div>
                                ) : (
                                    /* ── Form ── */
                                    <form onSubmit={handleSubmit} noValidate className="space-y-5">
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900 mb-1">Send us a message</h3>
                                            <p className="text-sm text-slate-400">All fields marked <span className="text-red-400">*</span> are required.</p>
                                        </div>

                                        {/* Row 1 — Name + Company */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">
                                                    Full Name <span className="text-red-400">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    placeholder="Rahul Sharma"
                                                    value={form.name}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    className={fieldClass("name")}
                                                />
                                                {touched.name && errors.name && (
                                                    <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                                                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
                                                        {errors.name}
                                                    </p>
                                                )}
                                            </div>

                                            <div>
                                                <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">
                                                    Company Name
                                                </label>
                                                <input
                                                    type="text"
                                                    name="company"
                                                    placeholder="Your Company Pvt. Ltd."
                                                    value={form.company}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    className={fieldClass("company")}
                                                />
                                            </div>
                                        </div>

                                        {/* Row 2 — Email + Phone */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">
                                                    Email Address <span className="text-red-400">*</span>
                                                </label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    placeholder="you@company.com"
                                                    value={form.email}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    className={fieldClass("email")}
                                                />
                                                {touched.email && errors.email && (
                                                    <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                                                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
                                                        {errors.email}
                                                    </p>
                                                )}
                                            </div>

                                            <div>
                                                <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">
                                                    Phone Number
                                                </label>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    placeholder="+91 98765 43210"
                                                    value={form.phone}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    className={fieldClass("phone")}
                                                />
                                                {touched.phone && errors.phone && (
                                                    <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                                                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
                                                        {errors.phone}
                                                    </p>
                                                )}
                                            </div>
                                        </div>

                                        {/* Row 3 — Product */}
                                        <div>
                                            <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">
                                                Product Interested In
                                            </label>
                                            <div className="relative">
                                                <select
                                                    name="product"
                                                    value={form.product}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    className={`${fieldClass("product")} appearance-none pr-10 cursor-pointer`}
                                                >
                                                    <option value="">Select a product...</option>
                                                    {products.map((p) => (
                                                        <option key={p} value={p}>{p}</option>
                                                    ))}
                                                </select>
                                                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Row 4 — Message */}
                                        <div>
                                            <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">
                                                Message <span className="text-red-400">*</span>
                                            </label>
                                            <textarea
                                                name="message"
                                                rows={4}
                                                placeholder="Tell us about your requirement — quantity, specifications, delivery location, etc."
                                                value={form.message}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className={`${fieldClass("message")} resize-none`}
                                            />
                                            {touched.message && errors.message && (
                                                <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                                                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
                                                    {errors.message}
                                                </p>
                                            )}
                                            <p className="mt-1.5 text-xs text-slate-400 text-right">{form.message.length} / 500</p>
                                        </div>

                                        {/* Submit */}
                                        <button
                                            type="submit"
                                            disabled={loading}
                                            className="group w-full flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-400 text-white font-semibold text-sm shadow-lg shadow-indigo-200 hover:shadow-indigo-300 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                                        >
                                            {loading ? (
                                                <>
                                                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                                    </svg>
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    Send Message
                                                    <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                                    </svg>
                                                </>
                                            )}
                                        </button>

                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}