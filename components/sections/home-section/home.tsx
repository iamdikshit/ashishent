"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Hero() {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setLoaded(true);
    }, []);

    return (
        <section className="home relative min-h-screen flex items-center justify-center overflow-hidden">

            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('/images/bg.jpg')",
                }}
            />

            {/* Dark gradient overlay — bottom-heavy so text pops */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/55 to-slate-900/80" />

            {/* Subtle indigo tint overlay for brand consistency */}
            <div className="absolute inset-0 bg-indigo-950/30" />

            {/* Decorative top gradient bar (matches Header/Footer accent) */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 via-violet-500 to-indigo-400 z-10" />

            {/* Animated glow blob */}
            <div
                className={`absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-indigo-600/10 blur-3xl pointer-events-none transition-opacity duration-1000 ${
                    loaded ? "opacity-100" : "opacity-0"
                }`}
            />

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

                {/* Badge */}
                <div
                    className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-400/30 bg-indigo-500/10 backdrop-blur-sm mb-8 transition-all duration-700 ${
                        loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                >
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
                    <span className="text-xs font-semibold text-indigo-300 uppercase tracking-widest">
            Global Textile Imports
          </span>
                </div>

                {/* Headline */}
                <h1
                    className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-6 transition-all duration-700 delay-100 ${
                        loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                    }`}
                >
                    Trusted Importer{" "}
                    <span className="relative inline-block">
            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">
              & Textile ,
            </span>
          </span>{" "}
                    Trader in Delhi – Since{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-300">
            2020
          </span>
                </h1>

                {/* Subheading */}
                <p
                    className={`text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10 transition-all duration-700 delay-200 ${
                        loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                    }`}
                >
                    Trusted sourcing partner delivering high-quality textile products at{" "}
                    <span className="text-white font-medium">competitive global prices.</span>
                </p>

                {/* CTA Button */}
                <div
                    className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-300 ${
                        loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                    }`}
                >
                    <Link
                        href="/product"
                        className="group relative inline-flex items-center gap-3 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-base rounded-xl shadow-xl shadow-indigo-900/40 hover:shadow-indigo-600/40 transition-all duration-300 hover:scale-105 active:scale-95"
                    >
                        {/* Shimmer effect */}
                        <span className="absolute inset-0 rounded-xl overflow-hidden">
              <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
            </span>

                        <svg
                            className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
                        </svg>
                        Explore Products
                        <svg
                            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2.5}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>

                </div>


            </div>

            {/* Scroll indicator */}
            <div
                className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-700 delay-700 ${
                    loaded ? "opacity-100" : "opacity-0"
                }`}
            >
                <span className="text-xs text-slate-400 uppercase tracking-widest">Scroll</span>
                <div className="w-5 h-8 rounded-full border border-slate-500 flex items-start justify-center p-1">
                    <div className="w-1 h-2 rounded-full bg-indigo-400 animate-bounce" />
                </div>
            </div>
        </section>
    );
}