"use client";

import { useState } from "react";
import Link from "next/link";
import NoProduct from "@/components/sections/noproduct";
import Image from "next/image";

const tabs = ["Overview", "Specifications", "Applications"];

export default function ProductDetail(productDetail: { data: string | never[]; }) {

    const [activeTab, setActiveTab] = useState("Overview");
    if(productDetail?.data.length == 0) {
        return <NoProduct/>;
    }
    console.log(productDetail?.data[0]);


    const product = productDetail?.data[0]


    return (
        <section className="relative bg-slate-50 min-h-screen overflow-hidden">

            {/* Background blobs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-50 translate-x-1/3 -translate-y-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-100 rounded-full blur-3xl opacity-50 -translate-x-1/3 translate-y-1/3 pointer-events-none" />

            {/* Dot grid */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: "radial-gradient(circle, #c7d2fe 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                    opacity: 0.4,
                }}
            />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">

                {/* ── Breadcrumb ── */}
                <nav className="flex items-center gap-2 text-xs text-slate-400 mb-8">
                    <Link href="/" className="hover:text-indigo-600 transition-colors">Home</Link>
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                    <Link href="/product" className="hover:text-indigo-600 transition-colors">Products</Link>
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                    <span className="text-slate-600 font-medium">{product.name}</span>
                </nav>

                {/* ── Hero Row ── */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">

                    {/* Left — Visual card */}
                    <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-indigo-100 border border-slate-200 bg-white">

                        {/* Gradient top bar */}
                        <div className={` h-1.5 w-full bg-gradient-to-r ${product.gradient}`} />


                        {/* Visual area */}
                        <div className="relative flex items-center justify-center h-64 sm:h-80">

                            {/* 1. Background image — bottom layer */}
                            <Image
                                className="absolute inset-0 w-full h-full object-cover"
                                src="/images/carpet.jpg"
                                alt="carpet"
                                width={600}
                                height={400}
                            />

                            {/* 2. Gradient color overlay — sits on top of image */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-80`} />

                            {/* 3. Dot texture — on top of gradient */}
                            <div
                                className="absolute inset-0 opacity-10"
                                style={{
                                    backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
                                    backgroundSize: "24px 24px",
                                }}
                            />

                            {/* 4. Icon — topmost content */}
                            <div className="relative flex flex-col items-center gap-4">
                                <div className="w-24 h-24 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center text-white shadow-xl">
                                    <div className="w-12 h-12">{product.icon}</div>
                                </div>
                                <span className="text-white/80 text-sm font-medium tracking-wide">{product.category}</span>
                            </div>

                            {/* MOQ badge */}
                            <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-2.5">
                                <p className="text-white/60 text-xs uppercase tracking-widest mb-0.5">Min. Order Qty</p>
                                <p className="text-white text-sm font-bold">{product.moq}</p>
                            </div>

                            {/* Origin badge */}
                            <div className="absolute bottom-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-2.5">
                                <p className="text-white/60 text-xs uppercase tracking-widest mb-0.5">Origin</p>
                                <p className="text-white text-sm font-bold">{product.origin}</p>
                            </div>
                        </div>

                        {/* Visual area */}
                        {/*<div className={`relative flex items-center justify-center  bg-gradient-to-br ${product.gradient} h-64 sm:h-80 `}>*/}
                        {/*    <Image className={"absolute w-full h-full -z-30"} src={"/images/carpet.jpg"} alt={"carpet"} width={600} height={400}/>*/}
                        {/*    /!* Dot texture *!/*/}
                        {/*    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "24px 24px" }} />*/}

                        {/*    /!* Icon *!/*/}
                        {/*    <div className="relative flex flex-col items-center gap-4">*/}
                        {/*        <div className="w-24 h-24 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center text-white shadow-xl">*/}
                        {/*            <div className="w-12 h-12">{product.icon}</div>*/}
                        {/*        </div>*/}
                        {/*        <span className="text-white/80 text-sm font-medium tracking-wide">{product.category}</span>*/}
                        {/*    </div>*/}

                        {/*    /!* MOQ badge *!/*/}
                        {/*    <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-2.5">*/}
                        {/*        <p className="text-white/60 text-xs uppercase tracking-widest mb-0.5">Min. Order Qty</p>*/}
                        {/*        <p className="text-white text-sm font-bold">{product.moq}</p>*/}
                        {/*    </div>*/}

                        {/*    /!* Origin badge *!/*/}
                        {/*    <div className="absolute bottom-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-2.5">*/}
                        {/*        <p className="text-white/60 text-xs uppercase tracking-widest mb-0.5">Origin</p>*/}
                        {/*        <p className="text-white text-sm font-bold">{product.origin}</p>*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                        {/* Quick stats strip */}
                        <div className="grid grid-cols-3 divide-x divide-slate-100 border-t border-slate-100">
                            {[
                                { label: "Lead Time", value: product.leadTime },
                                { label: "MOQ", value: product.moq.split(" ")[0] + " kg" },
                                { label: "Origin", value: "China / SEA" },
                            ].map((s) => (
                                <div key={s.label} className="px-4 py-4 text-center">
                                    <p className="text-xs text-slate-400 mb-1 uppercase tracking-wide">{s.label}</p>
                                    <p className="text-sm font-bold text-slate-800">{s.value}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right — Product Info */}
                    <div className="flex flex-col justify-center">
                        {/* Badge row */}
                        <div className="flex items-center gap-2 mb-4">
              <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${product.tagColor}`}>
                {product.tag}
              </span>
                            <span className="text-xs font-medium px-2.5 py-1 rounded-full border border-slate-200 text-slate-500 bg-white">
                {product.category}
              </span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-2">
                            {product.name}
                        </h1>
                        <p className="text-base text-indigo-600 font-medium mb-4">{product.tagline}</p>
                        <p className="text-slate-500 text-sm leading-relaxed mb-6">{product.description}</p>

                        {/* Key features */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                            {product.features.map((feature) => (
                                <div key={feature} className="flex items-start gap-2.5">
                                    <div className={`mt-0.5 w-5 h-5 rounded-full bg-gradient-to-br ${product.gradient} flex items-center justify-center flex-shrink-0 shadow-sm`}>
                                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-sm text-slate-600">{feature}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTA buttons */}

                    </div>
                </div>

                {/* ── Tabs Section ── */}
                <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden mb-12">

                    {/* Tab bar */}
                    <div className="flex border-b border-slate-100 overflow-x-auto">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`flex-shrink-0 px-6 py-4 text-sm font-semibold transition-all duration-200 border-b-2 ${
                                    activeTab === tab
                                        ? "border-indigo-600 text-indigo-600 bg-indigo-50/50"
                                        : "border-transparent text-slate-500 hover:text-slate-700 hover:bg-slate-50"
                                }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Tab content */}
                    <div className="p-7 sm:p-9">

                        {/* Overview */}
                        {activeTab === "Overview" && (
                            <div className="space-y-6">
                                <p className="text-slate-600 text-base leading-relaxed">{product.longDescription}</p>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    {[
                                        { icon: "🌏", title: "Global Sourcing", desc: "Direct from certified Asian manufacturers." },
                                        { icon: "✅", title: "Quality Checked", desc: "Each batch inspected before dispatch." },
                                        { icon: "📦", title: "Bulk Ready", desc: "Fulfil large orders with short lead times." },
                                    ].map((c) => (
                                        <div key={c.title} className="rounded-xl bg-slate-50 border border-slate-100 p-5 text-center transition-all duration-200 max-h-auto">
                                            {/*<div className="text-3xl mb-3">{c.icon}</div>*/}
                                            <h4 className="text-sm font-semibold text-slate-800 mb-1">{c.title}</h4>
                                            <p className="text-xs text-slate-500 leading-relaxed">{c.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Specifications */}
                        {activeTab === "Specifications" && (
                            <div className="overflow-hidden rounded-xl border border-slate-100">
                                <table className="w-full text-sm">
                                    <thead>
                                    <tr className="bg-gradient-to-r from-indigo-600 to-violet-600">
                                        <th className="text-left px-5 py-3.5 text-white font-semibold text-xs uppercase tracking-widest w-1/3">Parameter</th>
                                        <th className="text-left px-5 py-3.5 text-white font-semibold text-xs uppercase tracking-widest">Details</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {product.specifications.map((spec, i) => (
                                        <tr key={spec.label} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                                            <td className="px-5 py-3.5 font-medium text-slate-700 border-t border-slate-100">{spec.label}</td>
                                            <td className="px-5 py-3.5 text-slate-500 border-t border-slate-100">{spec.value}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        )}

                        {/* Applications */}
                        {activeTab === "Applications" && (
                            <div>
                                <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                                    Our Polyester Knitted Fabric is widely used across these industries and product categories:
                                </p>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                    {product.applications.map((app) => (
                                        <div
                                            key={app}
                                            className="group flex items-center gap-3 px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-indigo-200 hover:bg-indigo-50/50 hover:shadow-sm transition-all duration-200"
                                        >
                                            <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${product.gradient} flex-shrink-0`} />
                                            <span className="text-sm font-medium text-slate-700 group-hover:text-indigo-700 transition-colors duration-200">{app}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* ── Inquiry CTA Banner ── */}
                <div className="relative rounded-2xl overflow-hidden mb-12 shadow-xl shadow-indigo-100">
                    <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient}`} />
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
                    <div className="relative px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
                        <div>
                            <h3 className="text-xl font-bold text-white mb-1">Interested in this product?</h3>
                            <p className="text-indigo-100 text-sm max-w-md">
                                Get in touch with our team for pricing, samples, and bulk order arrangements.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-indigo-700 font-semibold text-sm hover:bg-indigo-50 shadow-md transition-all duration-200 hover:scale-105 active:scale-95"
                            >
                                Request a Quote
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                            </Link>
                            {/*<a*/}
                            {/*    href="https://wa.me/919876543210"*/}
                            {/*    target="_blank"*/}
                            {/*    rel="noopener noreferrer"*/}
                            {/*    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 border border-white/20 text-white font-semibold text-sm hover:bg-white/20 transition-all duration-200"*/}
                            {/*>*/}
                            {/*    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>*/}
                            {/*    WhatsApp Us*/}
                            {/*</a>*/}
                        </div>
                    </div>
                </div>





            </div>
        </section>
    );
}