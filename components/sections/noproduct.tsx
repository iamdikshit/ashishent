import Link from "next/link";

export default function NoProduct() {
    const suggestions = [
        { name: "Hosiery Rags", href: "/products/hosiery-rags" },
        { name: "Chinese Carpets", href: "/products/chinese-carpets" },
        { name: "Polyester Knitted Fabric", href: "/products/polyester-knitted-fabric" },
        { name: "NR Knitted Fabrics", href: "/products/nr-knitted-fabrics" },
    ];

    return (
        <section className="relative bg-slate-50 min-h-[80vh] flex items-center justify-center overflow-hidden py-20">

            {/* Background blobs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-50 translate-x-1/3 -translate-y-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-100 rounded-full blur-3xl opacity-50 -translate-x-1/3 translate-y-1/3 pointer-events-none" />

            {/* Dot grid */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: "radial-gradient(circle, #c7d2fe 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                    opacity: 0.45,
                }}
            />

            <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

                {/* Illustration */}
                <div className="flex justify-center mb-8">
                    <div className="relative">
                        {/* Outer ring */}
                        <div className="w-36 h-36 rounded-full bg-indigo-50 border-2 border-dashed border-indigo-200 flex items-center justify-center">
                            {/* Inner ring */}
                            <div className="w-24 h-24 rounded-full bg-white border border-indigo-100 shadow-lg shadow-indigo-100 flex items-center justify-center">
                                <svg
                                    className="w-10 h-10 text-indigo-300"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={1.5}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10"
                                    />
                                </svg>
                            </div>
                        </div>

                        {/* Floating question badge */}
                        <div className="absolute -top-2 -right-2 w-9 h-9 rounded-full bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center shadow-lg shadow-indigo-200">
                            <svg
                                className="w-4 h-4 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2.5}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </div>

                        {/* Floating search badge */}
                        <div className="absolute -bottom-2 -left-3 w-9 h-9 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center">
                            <svg
                                className="w-4 h-4 text-slate-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-200 bg-indigo-50 mb-5">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                    <span className="text-xs font-semibold text-indigo-600 uppercase tracking-widest">
            Product Not Found
          </span>
                </div>

                {/* Heading */}
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-3">
                    No Product{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
            Available
          </span>
                </h2>

                {/* Subtext */}
                <p className="text-base text-slate-500 leading-relaxed mb-10 max-w-md mx-auto">
                    We couldn't find the product you're looking for. It may have been removed, renamed, or isn't currently in stock. Browse our catalogue or reach out to our team.
                </p>

                {/* Divider */}
                <div className="flex items-center justify-center gap-3 mb-10">
                    <div className="h-px w-16 bg-gradient-to-r from-transparent to-indigo-300" />
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                    <div className="h-px w-16 bg-gradient-to-l from-transparent to-indigo-300" />
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
                    <Link
                        href="/product"
                        className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-lg shadow-indigo-200 hover:shadow-indigo-300 transition-all duration-300 hover:scale-105 active:scale-95"
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h7" />
                        </svg>
                        Browse All Products
                        <svg
                            className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>

                    {/*<Link*/}
                    {/*    href="/contact"*/}
                    {/*    className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white border border-slate-200 hover:border-indigo-200 text-slate-700 hover:text-indigo-700 font-semibold text-sm shadow-sm hover:shadow-md transition-all duration-300"*/}
                    {/*>*/}
                    {/*    <svg className="w-4 h-4 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>*/}
                    {/*        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />*/}
                    {/*    </svg>*/}
                    {/*    Contact Our Team*/}
                    {/*</Link>*/}
                </div>

            </div>
        </section>
    );
}