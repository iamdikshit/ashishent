import Link from "next/link";

import productDetail from "@/data/product-detail";


export default function Products() {
    const products = productDetail
    return (
        <section className="relative bg-slate-50 py-20 lg:py-28 overflow-hidden">

            {/* Background glow blobs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-60 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-100 rounded-full blur-3xl opacity-60 translate-y-1/2 -translate-x-1/3 pointer-events-none" />

            {/* Dot pattern */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: "radial-gradient(circle, #c7d2fe 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                    opacity: 0.5,
                }}
            />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* ── Section Header ── */}
                <div className="text-center mb-14">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-200 bg-indigo-50 mb-5">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
                        <span className="text-xs font-semibold text-indigo-600 uppercase tracking-widest">
              What We Offer
            </span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-4">
                        Our{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
              Products
            </span>
                    </h2>

                    <p className="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
                        We import and trade a wide range of textile materials, delivering
                        quality and reliability to partners across the globe.
                    </p>

                    <div className="flex items-center justify-center gap-3 mt-6">
                        <div className="h-px w-16 bg-gradient-to-r from-transparent to-indigo-400" />
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                        <div className="h-px w-16 bg-gradient-to-l from-transparent to-indigo-400" />
                    </div>
                </div>

                {/* ── Product Cards ── */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((product, index) => (
                        <div
                            key={product.name}
                            className="group relative bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-xl hover:shadow-indigo-100 hover:border-indigo-200 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer"
                        >
                            {/* Top accent line on hover */}
                            <div className="absolute top-0 left-0 right-0 h-2 rounded-t-2xl bg-gradient-to-r from-indigo-500 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            {/* Watermark number */}
                            <span className="absolute bottom-4 right-5 text-5xl font-black text-slate-100 select-none pointer-events-none group-hover:text-indigo-50 transition-colors duration-300">
                {String(index + 1).padStart(2, "0")}
              </span>

                            {/* Icon + Tag row */}
                            <div className="flex items-start justify-between mb-5">
                                <div className={`w-12 h-12 rounded-xl border flex items-center justify-center group-hover:scale-110 transition-transform duration-300 bg-indigo-50 border-indigo-100 text-indigo-600`}>
                                    {product.icon}
                                </div>
                                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border bg-indigo-50 text-indigo-600 border-indigo-200`}>
                  {product.tag}
                </span>
                            </div>

                            {/* Name */}
                            <h3 className="text-lg font-semibold text-slate-800 mb-2 group-hover:text-indigo-700 transition-colors duration-200">
                                {product.name}
                            </h3>

                            {/* Description */}
                            <p className="text-sm text-slate-500 leading-relaxed mb-5">
                                {product.description}
                            </p>

                            {/* Learn more */}
                            <div className="flex items-center gap-1.5 text-sm font-semibold text-indigo-600 group-hover:text-indigo-700">
                                <Link href={`product/${product.id}`}><span>Learn more</span></Link>
                                <svg
                                    className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ── Bottom CTA Banner ── */}
                <div className="mt-16 relative rounded-2xl overflow-hidden shadow-xl shadow-indigo-100">
                    {/* gradient background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-violet-600" />

                    {/* decorative circles */}
                    <div className="absolute -top-10 -right-10 w-48 h-48 bg-white/5 rounded-full" />
                    <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-white/5 rounded-full" />

                    <div className="relative px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
                        <div>
                            <h3 className="text-xl font-bold text-white mb-1">
                                Need something specific?
                            </h3>
                            <p className="text-indigo-100 text-sm max-w-md">
                                We source custom textile products on request — get in touch with our team today.
                            </p>
                        </div>
                        <Link
                            href="/contact"
                            className="flex-shrink-0 group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white text-indigo-700 font-semibold text-sm hover:bg-indigo-50 shadow-md transition-all duration-300 hover:scale-105 active:scale-95 whitespace-nowrap"
                        >
                            Request a Custom Order
                            <svg
                                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    );
}
