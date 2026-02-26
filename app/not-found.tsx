"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const quickLinks = [
    {
        label: "Home",
        href: "/",
        icon: (
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
        ),
    },
    {
        label: "Products",
        href: "/products",
        icon: (
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10" />
            </svg>
        ),
    },
    {
        label: "About Us",
        href: "/about",
        icon: (
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    },
    {
        label: "Contact",
        href: "/contact",
        icon: (
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
    },
];

export default function NotFound() {
    const [mounted, setMounted] = useState(false);
    const [count, setCount] = useState(10);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Countdown auto-redirect
    useEffect(() => {
        if (count <= 0) {
            window.location.href = "/";
            return;
        }
        const timer = setTimeout(() => setCount((c) => c - 1), 1000);
        return () => clearTimeout(timer);
    }, [count]);

    return (
        <section className="relative bg-slate-50 min-h-screen flex items-center justify-center overflow-hidden py-20">

            {/* Background blobs */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-indigo-100 rounded-full blur-3xl opacity-40 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-violet-100 rounded-full blur-3xl opacity-40 translate-x-1/2 translate-y-1/2 pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-indigo-50 rounded-full blur-3xl opacity-60 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

            {/* Dot grid */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: "radial-gradient(circle, #c7d2fe 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                    opacity: 0.45,
                }}
            />

            <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

                {/* Giant 404 */}
                <div
                    className={`relative mb-4 transition-all duration-700 ${
                        mounted ? "opacity-100 scale-100" : "opacity-0 scale-95"
                    }`}
                >
                    {/* Glow behind */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="w-64 h-24 bg-indigo-400/20 rounded-full blur-3xl" />
                    </div>

                    <h1 className="relative text-[10rem] sm:text-[14rem] font-black leading-none tracking-tighter select-none">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-200 via-indigo-300 to-violet-200">
              4
            </span>
                        {/* Central 0 with icon inside */}
                        <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-violet-500">
                0
              </span>
              <span className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center shadow-xl shadow-indigo-300 -mt-2">
                  <svg
                      className="w-6 h-6 sm:w-8 sm:h-8 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
              </span>
            </span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-br from-violet-200 via-indigo-300 to-indigo-200">
              4
            </span>
                    </h1>
                </div>

                {/* Badge */}
                <div
                    className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-200 bg-indigo-50 mb-5 transition-all duration-700 delay-100 ${
                        mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                >
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
                    <span className="text-xs font-semibold text-indigo-600 uppercase tracking-widest">
            Page Not Found
          </span>
                </div>

                {/* Heading */}
                <h2
                    className={`text-2xl sm:text-3xl font-bold text-slate-900 mb-3 tracking-tight transition-all duration-700 delay-150 ${
                        mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                >
                    Oops! You've wandered off the{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
            fabric trail
          </span>
                </h2>

                {/* Subtext */}
                <p
                    className={`text-base text-slate-500 leading-relaxed max-w-md mx-auto mb-8 transition-all duration-700 delay-200 ${
                        mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                >
                    The page you're looking for doesn't exist or has been moved. Let's get you back on track.
                </p>

                {/* Divider */}
                <div
                    className={`flex items-center justify-center gap-3 mb-8 transition-all duration-700 delay-200 ${
                        mounted ? "opacity-100" : "opacity-0"
                    }`}
                >
                    <div className="h-px w-16 bg-gradient-to-r from-transparent to-indigo-300" />
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                    <div className="h-px w-16 bg-gradient-to-l from-transparent to-indigo-300" />
                </div>

                {/* Primary CTA */}
                <div
                    className={`flex flex-col sm:flex-row items-center justify-center gap-3 mb-10 transition-all duration-700 delay-300 ${
                        mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                >
                    <Link
                        href="/"
                        className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-lg shadow-indigo-200 hover:shadow-indigo-300 transition-all duration-300 hover:scale-105 active:scale-95"
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        Back to Home
                        <svg
                            className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>


                </div>

                {/* Quick links */}


                {/* Countdown */}
                <div
                    className={`transition-all duration-700 delay-500 ${
                        mounted ? "opacity-100" : "opacity-0"
                    }`}
                >
                    <p className="text-sm text-slate-400">
                        Redirecting to home in{" "}
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-br from-indigo-600 to-violet-600 text-white text-xs font-bold shadow-md shadow-indigo-200 mx-1">
              {count}
            </span>{" "}
                        seconds &nbsp;·&nbsp;{" "}
                        <button
                            onClick={() => setCount(9999)}
                            className="text-indigo-500 hover:text-indigo-700 font-medium underline underline-offset-2 transition-colors duration-150"
                        >
                            Cancel
                        </button>
                    </p>
                </div>

            </div>
        </section>
    );
}