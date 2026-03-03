
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const products = [
    {
        name: "Chinese Carpets",
        desc: "Hand-crafted luxury",
        gradient: "from-amber-400 via-orange-400 to-rose-500",
        glow: "shadow-orange-300",
        ring: "ring-orange-400",
        badge: "Premium",
        badgeCss: "bg-orange-50 text-orange-700 border-orange-200",
        rotate: "-rotate-2",
        href:"/images/carpet2.jpg",
        icon: (
            <svg className="w-16 h-16 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm0 8a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zm12-1a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
            </svg>
        ),
    },
    {
        name: "Hosiery Rags",
        desc: "Global quality sourcing",
        gradient: "from-indigo-500 via-violet-500 to-purple-600",
        glow: "shadow-indigo-300",
        ring: "ring-indigo-400",
        badge: "Bestseller",
        badgeCss: "bg-indigo-50 text-indigo-700 border-indigo-200",
        rotate: "rotate-2",

        href:"/images/bg.jpg",
        icon: (
            <svg className="w-16 h-16 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10" />
            </svg>
        ),
    },
    {
        name: "Knitted Fabrics",
        desc: "Stretch & performance",
        gradient: "from-emerald-400 via-teal-500 to-cyan-500",
        glow: "shadow-emerald-300",
        ring: "ring-emerald-400",
        badge: "High Demand",
        badgeCss: "bg-emerald-50 text-emerald-700 border-emerald-200",
        rotate: "-rotate-1",
        href:"/images/knit-fabrics.jpg",
        icon: (
            <svg className="w-16 h-16 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2v-4M9 21H5a2 2 0 01-2-2v-4m0 0h18" />
            </svg>
        ),
    },
    {
        name: "Woven Fabrics",
        desc: "Strength & versatility",
        gradient: "from-rose-400 via-pink-500 to-fuchsia-600",
        glow: "shadow-rose-300",
        ring: "ring-rose-400",
        badge: "Versatile",
        badgeCss: "bg-rose-50 text-rose-700 border-rose-200",
        rotate: "rotate-1",
        href:"/images/woven.jpg",
        icon: (
            <svg className="w-16 h-16 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
            </svg>
        ),
    },
];



export default function Hero() {
    const [loaded, setLoaded] = useState(false);
    const [active, setActive] = useState(0);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setLoaded(true);
        const t = setInterval(() => setActive((p) => (p + 1) % products.length), 2800);
        return () => clearInterval(t);
    }, []);

    return (
        <section className="relative min-h-screen bg-white flex items-center overflow-hidden">

            {/* ── Colorful background mesh ── */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute -top-40 -left-40 w-[560px] h-[560px] rounded-full bg-gradient-to-br from-indigo-100 to-violet-100 blur-3xl opacity-70" />
                <div className="absolute -bottom-40 -right-40 w-[560px] h-[560px] rounded-full bg-gradient-to-br from-rose-100 to-orange-100 blur-3xl opacity-70" />
                <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-emerald-100 blur-2xl opacity-50" />
                <div className="absolute bottom-1/3 left-1/4 w-72 h-72 rounded-full bg-amber-100 blur-2xl opacity-50" />
                {/* Dot texture */}
                <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle, #c7d2fe 1px, transparent 1px)", backgroundSize: "36px 36px", opacity: 0.3 }} />
            </div>

            {/* Top rainbow bar */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-indigo-500 via-violet-500 via-rose-400 via-orange-400 to-emerald-500 z-20" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-28 lg:py-0 lg:min-h-screen flex items-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-10 items-center w-full">

                    {/* ══════════════════════════════
               LEFT — Text Content
          ══════════════════════════════ */}
                    <div className={`max-w-xl transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>

                        {/* Animated badge */}
                        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-indigo-200 bg-white shadow-sm shadow-indigo-100 mb-7">
              <span className="flex gap-1">
                {["bg-indigo-500", "bg-rose-500", "bg-emerald-500"].map((c, i) => (
                    <span key={i} className={`w-1.5 h-1.5 rounded-full ${c} animate-bounce`} style={{ animationDelay: `${i * 120}ms` }} />
                ))}
              </span>
                            <span className="text-xs font-bold text-slate-600 tracking-wide">
                Premium Textile Importer · <span className="text-indigo-600">Delhi NCR, India</span>
              </span>
                        </div>

                        {/* Headline */}
                        <h1 className="text-4xl sm:text-5xl xl:text-[3.5rem] font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-5">
                            Trusted Importer & Textile,{" "}
                            <span className="relative whitespace-nowrap">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
                  Trader {" "}
                </span>
                <svg className="absolute -bottom-1 left-0 w-full" height="6" viewBox="0 0 200 6" preserveAspectRatio="none">
                  <path d="M0 5 Q50 0 100 5 Q150 10 200 5" stroke="url(#u1)" strokeWidth="3" fill="none" strokeLinecap="round"/>
                  <defs><linearGradient id="u1" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#6366f1"/><stop offset="100%" stopColor="#a855f7"/></linearGradient></defs>
                </svg>
              </span>
                            <span className="text-4xl sm:text-5xl xl:text-[3.5rem] font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-5">
                                in Delhi – Since 2020
                            </span>
                        </h1>

                        {/* Subheading */}
                        <p className="text-lg text-slate-500 leading-relaxed mb-9">
                            Trusted sourcing partner delivering{" "}
                            <strong className="font-semibold text-slate-800">high-quality textile products</strong>{" "}
                            at competitive global prices — from the heart of Delhi NCR to businesses nationwide.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-wrap gap-3 mb-10">
                            <Link href="/product"
                                  className="group relative inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl text-sm font-bold text-white overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-2xl"
                                  style={{ background: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #ec4899 100%)", boxShadow: "0 8px 32px rgba(99,102,241,0.35)" }}>
                                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10" />
                                </svg>
                                Explore Products
                                <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>

                        </div>


                    </div>

                    {/* ══════════════════════════════
               RIGHT — Product Cards Grid
          ══════════════════════════════ */}
                    <div className={`relative transition-all duration-700 delay-200 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>

                        {/* Decorative blobs behind grid */}
                        <div className="absolute top-6 right-6 w-56 h-56 bg-gradient-to-br from-violet-200 to-indigo-200 rounded-full blur-3xl opacity-50 pointer-events-none" />
                        <div className="absolute bottom-6 left-6 w-56 h-56 bg-gradient-to-br from-orange-200 to-rose-200 rounded-full blur-3xl opacity-50 pointer-events-none" />

                        {/* 2×2 Grid */}
                        <div className="grid grid-cols-2 gap-5 relative z-10">
                            {products.map((p, i) => (
                                <button
                                    key={p.name}
                                    onClick={() => setActive(i)}
                                    className={`group text-left rounded-3xl overflow-hidden transition-all duration-500 ${p.rotate} ${
                                        active === i
                                            ? `scale-[1.06] shadow-2xl ${p.glow} ring-2 ring-offset-3 ${p.ring}`
                                            : "shadow-lg hover:scale-[1.03] hover:shadow-xl"
                                    }`}
                                    style={{ transitionDelay: `${i * 60}ms` }}
                                >
                                    {/* Image area */}
                                    <div className={`relative h-44 sm:h-48 bg-gradient-to-br ${p.gradient} flex items-center justify-center overflow-hidden`}>
                                        {/* Dot texture overlay */}
                                        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)", backgroundSize: "14px 14px" }} />
                                        {/* Diagonal shine */}
                                        <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-white/20" />
                                        {/* Icon */}
                                        {/*<div className="relative">{p.icon}</div>*/}
                                        <Image src={p.href} alt={p.name} fill className="object-cover" />
                                        <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient} opacity-60 mix-blend-multiply`} />


                                        {/* Active pulse */}
                                        {active === i && (
                                            <div className="absolute top-3 right-3">
                                                <div className="relative w-3 h-3">
                                                    <div className="absolute inset-0 rounded-full bg-white animate-ping opacity-75" />
                                                    <div className="relative w-3 h-3 rounded-full bg-white shadow-sm" />
                                                </div>
                                            </div>
                                        )}

                                        {/* Badge inside image */}
                                        <div className="absolute bottom-3 left-3">
                      <span className="text-xs font-bold text-white bg-black/20 backdrop-blur-sm border border-white/20 px-2.5 py-1 rounded-full">
                        {p.badge}
                      </span>
                                        </div>
                                    </div>

                                    {/* Card footer */}
                                    <div className="bg-white px-4 py-3.5 border-t border-slate-100">
                                        <p className="text-sm font-bold text-slate-800 leading-snug">{p.name}</p>
                                        <p className="text-xs text-slate-400 mt-0.5">{p.desc}</p>
                                    </div>
                                </button>
                            ))}
                        </div>



                        {/* Side dot nav */}
                        <div className="hidden lg:flex absolute -right-6 top-1/2 -translate-y-1/2 flex-col gap-2.5">
                            {products.map((_, i) => (
                                <button key={i} onClick={() => setActive(i)}
                                        className={`rounded-full transition-all duration-400 ${active === i ? "w-2.5 h-9 bg-gradient-to-b from-indigo-500 to-violet-600 shadow-md" : "w-2.5 h-2.5 bg-slate-200 hover:bg-slate-300"}`}
                                />
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            {/* Bottom fade-to-slate */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-50 to-transparent pointer-events-none" />
        </section>
    );
}