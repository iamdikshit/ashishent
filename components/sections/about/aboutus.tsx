import Link from "next/link";
import Image from "next/image";

const values = [
    {
        title: "Integrity",
        description: "Honest dealings and transparent communication in every transaction.",
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
    },
    {
        title: "Quality First",
        description: "Every product we import is rigorously checked to meet the highest standards.",
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
        ),
    },
    {
        title: "Global Reach",
        description: "Strong sourcing networks spanning Asia, Europe, and beyond.",
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    },
    {
        title: "Customer Focus",
        description: "Your business growth drives every decision we make.",
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
    },
];

const markets = [
    {
        city: "Delhi NCR",
        role: "Primary Hub",
        description: "Headquartered in Delhi with strong ties to Gandhi Nagar, Chandni Chowk, and other major textile markets.",
        icon: "🏙️",
        highlight: true,
    },
    {
        city: "Pan India",
        role: "Distribution",
        description: "Supplying wholesale textile products to retailers, manufacturers, and traders across all major Indian states.",
        icon: "🇮🇳",
        highlight: false,
    },
    {
        city: "China",
        role: "Sourcing Partner",
        description: "Direct sourcing relationships with leading Chinese carpet and fabric manufacturers ensuring quality at origin.",
        icon: "🇨🇳",
        highlight: false,
    },
    {
        city: "Global Markets",
        role: "Import Network",
        description: "A growing international procurement network spanning South-East Asia, Central Asia, and beyond.",
        icon: "🌏",
        highlight: false,
    },
];

export default function AboutUs() {
    return (
        <section className="relative bg-slate-50 py-20 lg:py-28 overflow-hidden">

            {/* Background blobs */}
            <div className="absolute top-1/2 left-0 w-80 h-80 bg-indigo-100 rounded-full blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute top-0 right-0 w-80 h-80 bg-violet-100 rounded-full blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2 pointer-events-none" />

            {/* Dot grid */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: "radial-gradient(circle, #c7d2fe 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                    opacity: 0.4,
                }}
            />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

                {/* ── ABOUT US ── */}
                <div>
                    {/* Header */}
                    <div className="text-center mb-14">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-200 bg-indigo-50 mb-5">
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
                            <span className="text-xs font-semibold text-indigo-600 uppercase tracking-widest">
                Who We Are
              </span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-4">
                            About{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
                Us
              </span>
                        </h2>
                        <div className="flex items-center justify-center gap-3 mt-4">
                            <div className="h-px w-16 bg-gradient-to-r from-transparent to-indigo-400" />
                            <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                            <div className="h-px w-16 bg-gradient-to-l from-transparent to-indigo-400" />
                        </div>
                    </div>

                    {/* Two-column layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                        {/* Left — text content */}
                        <div>
                            <h3 className="text-2xl font-bold text-slate-800 mb-4 leading-snug">
                                A Trusted Name in the{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
                  Textile Import Trade
                </span>
                            </h3>
                            <div className="space-y-4 text-slate-500 text-base leading-relaxed">
                                <p>
                                    <strong className="text-slate-700">Ashish Enterprises</strong>, based in Delhi, is a growing and trusted name in textile importing and local trading since 2020. We specialize in sourcing quality textile products from international markets and supplying them efficiently across local markets.
                                </p>
                                <p>
                                    With a strong commitment to quality, competitive pricing, and timely delivery, we serve wholesalers, retailers, manufacturers, and textile businesses with reliability and professionalism.
                                </p>

                            </div>

                            {/* Core values grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8">
                                {values.map((val) => (
                                    <div
                                        key={val.title}
                                        className="group flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200 hover:border-indigo-200 hover:shadow-md hover:shadow-indigo-50 transition-all duration-200"
                                    >
                                        <div className="w-9 h-9 rounded-lg bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-100 transition-colors duration-200">
                                            {val.icon}
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-slate-800 mb-0.5">{val.title}</p>
                                            <p className="text-xs text-slate-500 leading-relaxed">{val.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>


                        </div>

                        {/* Right — visual card */}
                        <div className="relative">
                            {/* Main card */}
                            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl shadow-indigo-100/50 bg-white">
                                {/* Top gradient bar */}
                                <div className="h-2 w-full bg-gradient-to-r from-indigo-600 via-violet-500 to-indigo-400" />

                                <div className="">
                                    <Image src={"/images/carpet2.jpg"} alt={"Ashish Enterprises"} width={600} height={600} />
                                </div>
                            </div>

                            {/* Floating badge */}
                            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl border border-slate-200 shadow-lg px-4 py-3 flex items-center gap-2.5">
                                <div className="w-8 h-8 rounded-full bg-green-50 border border-green-200 flex items-center justify-center">
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-slate-800">6+ Years</p>
                                    <p className="text-xs text-slate-400">of Excellence</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── OUR VISION ── */}
                <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white">
                    <div className="grid grid-cols-1 lg:grid-cols-2">

                        {/* Left gradient panel */}
                        <div className="relative bg-gradient-to-br from-indigo-600 to-violet-600 p-10 lg:p-12 flex flex-col justify-center">
                            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
                            <div className="relative">
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 mb-6">
                                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                                    <span className="text-xs font-semibold text-white uppercase tracking-widest">Our Vision</span>
                                </div>
                                <h3 className="text-2xl sm:text-3xl font-bold text-white leading-snug mb-4">
                                    To be India's most trusted textile import partner
                                </h3>
                                <p className="text-indigo-100 text-base leading-relaxed">
                                    Our vision is to become the leading bridge between global textile manufacturers and Indian businesses — empowering our clients with access to world-class products at accessible prices.
                                </p>
                            </div>
                        </div>

                        {/* Right content */}
                        <div className="p-10 lg:p-12 flex flex-col justify-center">
                            <h4 className="text-lg font-bold text-slate-800 mb-6">Our Commitment</h4>
                            <p className="text-slate-500 text-base leading-relaxed">
                                At Ashish Enterprises, we believe in building sustainable partnerships. Our focus remains on providing consistent product quality, transparent dealings, and dependable supply solutions to wholesalers, retailers, and manufacturers.
                            </p>
                            <br/>
                            <div className="space-y-5">
                                {[
                                    {
                                        title: "Strategic International Sourcing",

                                    },
                                    {
                                        title: "Strong Vendor Relationships",

                                    },
                                    {
                                        title: "Competitive Wholesale Pricing",

                                    },
                                    {
                                        title: "Bulk Supply & Distribution Capability",

                                    },
                                    {
                                        title: "Quality Assurance at Every Stage",

                                    },
                                    {
                                        title: "Timely and Reliable Delivery",

                                    },
                                    {
                                        title: "Established Network in Delhi Textile ",

                                    },
                                ].map((item) => (
                                    <div key={item.title} className="flex items-start gap-3">
                                        <div className="mt-0.5 w-5 h-5 rounded-full bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center flex-shrink-0 shadow-sm">
                                            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-slate-800 mb-0.5">{item.title}</p>

                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </section>
    );
}