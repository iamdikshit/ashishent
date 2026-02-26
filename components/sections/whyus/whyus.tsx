const reasons = [
    {
        title: "Reliable International Sourcing",
        description:
            "We partner with trusted manufacturers and suppliers across the globe to ensure every product meets our strict standards before it reaches you.",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        accent: "from-indigo-500 to-indigo-600",
        iconBg: "bg-indigo-50 text-indigo-600 border-indigo-100",
        stat: "20+ Countries",
    },
    {
        title: "Competitive Wholesale Pricing",
        description:
            "Our deep supplier relationships and high-volume purchasing power allow us to offer the most competitive rates in the market — without compromising quality.",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        accent: "from-violet-500 to-violet-600",
        iconBg: "bg-violet-50 text-violet-600 border-violet-100",
        stat: "Best Market Rate",
    },
    {
        title: "Bulk Supply Capability",
        description:
            "Whether you need a single container or recurring large-scale orders, we have the infrastructure and supply chain to fulfil bulk requirements efficiently.",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10" />
            </svg>
        ),
        accent: "from-indigo-500 to-violet-500",
        iconBg: "bg-indigo-50 text-indigo-600 border-indigo-100",
        stat: "10,000+ Units / Order",
    },
    {
        title: "Consistent Product Quality",
        description:
            "Every shipment undergoes thorough quality checks. We maintain strict compliance and inspection processes to deliver products that consistently meet your expectations.",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
        ),
        accent: "from-violet-500 to-indigo-500",
        iconBg: "bg-violet-50 text-violet-600 border-violet-100",
        stat: "ISO Compliant",
    },
    {
        title: "Timely Delivery",
        description:
            "We understand that time is money. Our logistics network ensures on-schedule dispatch and delivery so your business operations never face a delay.",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        accent: "from-indigo-500 to-indigo-600",
        iconBg: "bg-indigo-50 text-indigo-600 border-indigo-100",
        stat: "98% On-Time Rate",
    },
    {
        title: "Strong Presence in Delhi Local Markets",
        description:
            "With roots deeply embedded in Delhi's thriving textile trade hubs, we offer unmatched local market knowledge and accessibility for buyers across the region.",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
        accent: "from-violet-500 to-violet-600",
        iconBg: "bg-violet-50 text-violet-600 border-violet-100",
        stat: "Delhi NCR Hub",
    },
];

const stats = [
    { value: "6+", label: "Years in Business" },
    { value: "50+", label: "Global Suppliers" },
    { value: "500+", label: "Happy Clients" },
    { value: "98%", label: "On-Time Delivery" },
];

export default function WhyChooseUs() {
    return (
        <section className="relative bg-white py-20 lg:py-28 overflow-hidden">

            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-50 rounded-full blur-3xl opacity-80 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-violet-50 rounded-full blur-3xl opacity-80 translate-x-1/2 translate-y-1/2 pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* ── Section Header ── */}
                <div className="text-center mb-14">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-200 bg-indigo-50 mb-5">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
                        <span className="text-xs font-semibold text-indigo-600 uppercase tracking-widest">
              Our Strengths
            </span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-4">
                        Why Choose{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
              Ashish Enterprises?
            </span>
                    </h2>

                    <p className="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
                        We bring decades of expertise, global reach, and local commitment to every order — making us the preferred textile import partner for businesses across India.
                    </p>

                    <div className="flex items-center justify-center gap-3 mt-6">
                        <div className="h-px w-16 bg-gradient-to-r from-transparent to-indigo-400" />
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                        <div className="h-px w-16 bg-gradient-to-l from-transparent to-indigo-400" />
                    </div>
                </div>

                {/* ── Stats Bar ── */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
                    {stats.map((stat) => (
                        <div
                            key={stat.label}
                            className="relative rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 p-px shadow-md shadow-indigo-100"
                        >
                            <div className="rounded-2xl bg-white px-5 py-5 text-center h-full">
                                <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 to-violet-600 mb-1">
                                    {stat.value}
                                </p>
                                <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">
                                    {stat.label}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ── Reason Cards ── */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reasons.map((reason, index) => (
                        <div
                            key={reason.title}
                            className="group relative bg-slate-50 rounded-2xl border border-slate-200 p-6 hover:bg-white hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-100 hover:-translate-y-1.5 transition-all duration-300"
                        >
                            {/* Top gradient accent on hover */}
                            <div className={`absolute top-0 left-0 right-0 h-2 rounded-t-2xl bg-gradient-to-r ${reason.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                            {/* Index watermark */}
                            <span className="absolute bottom-4 right-5 text-5xl font-black text-slate-100 select-none pointer-events-none group-hover:text-indigo-50 transition-colors duration-300">
                {String(index + 1).padStart(2, "0")}
              </span>

                            {/* Icon + stat row */}
                            <div className="flex items-start justify-between mb-5">
                                <div className={`w-12 h-12 rounded-xl border flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${reason.iconBg}`}>
                                    {reason.icon}
                                </div>
                                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-600 border border-indigo-200">
                  {reason.stat}
                </span>
                            </div>

                            {/* Checkmark + Title */}
                            <div className="flex items-start gap-2.5 mb-2">
                                <div className={`mt-0.5 w-5 h-5 rounded-full bg-gradient-to-br ${reason.accent} flex items-center justify-center flex-shrink-0 shadow-sm`}>
                                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="text-base font-semibold text-slate-800 group-hover:text-indigo-700 transition-colors duration-200 leading-snug">
                                    {reason.title}
                                </h3>
                            </div>

                            {/* Description */}
                            <p className="text-sm text-slate-500 leading-relaxed pl-7">
                                {reason.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* ── Bottom Trust Banner ── */}
                <div className="mt-16 rounded-2xl bg-slate-50 border border-slate-200 px-8 py-10 flex flex-col lg:flex-row items-center justify-between gap-8">

                    {/* Left text */}
                    <div className="text-center lg:text-left max-w-xl">
                        <h3 className="text-xl font-bold text-slate-900 mb-2">
                            Trusted by businesses across Delhi & beyond
                        </h3>
                        <p className="text-sm text-slate-500 leading-relaxed">
                            From small retailers to large-scale manufacturers, Ashish Enterprises has been the go-to textile import partner for over 15 years. Let us handle your sourcing while you focus on growth.
                        </p>
                    </div>

                    {/* Trust badges */}
                    <div className="flex flex-wrap justify-center lg:justify-end items-center gap-3 flex-shrink-0">
                        {["Verified Importer", "Bulk Ready", "Delhi NCR", "Est. 2020"].map((badge) => (
                            <span
                                key={badge}
                                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-700 shadow-sm"
                            >
                <svg className="w-3.5 h-3.5 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                                {badge}
              </span>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}