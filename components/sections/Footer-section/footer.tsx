import Link from "next/link";
import Image from "next/image";
import productDetail from "@/data/product-detail";
const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Products", href: "/product" },
    { label: "Contact", href: "/contact" },
];



const socialLinks = [
    {
        label: "Twitter / X",
        href: "https://twitter.com",
        icon: (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.91-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
        ),
    },
    {
        label: "LinkedIn",
        href: "https://linkedin.com",
        icon: (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        ),
    },
    {
        label: "GitHub",
        href: "https://github.com",
        icon: (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
        ),
    },
    {
        label: "Instagram",
        href: "https://instagram.com",
        icon: (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
        ),
    },
    {
        label: "YouTube",
        href: "https://youtube.com",
        icon: (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
        ),
    },
];

export default function Footer() {
    const products = productDetail.map(product => ({label: product.name, href: product.id}));
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-900 text-slate-300">
            {/* Top gradient accent bar */}
            <div className="h-1 w-full bg-gradient-to-r from-indigo-600 via-violet-500 to-indigo-400" />

            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

                    {/* Column 1 — Brand & Company Overview */}
                    <div className="sm:col-span-2 lg:col-span-1">
                        {/* Logo */}
                        <Link href="/" className="inline-flex items-center gap-2 group mb-4">
                            <Image className={"top-0"} src={"/images/logo/logo1.png"} alt={"Logo"}
                                   width={150}
                                   height={50}
                            />
                        </Link>

                        <p className="text-sm text-slate-400 leading-relaxed mb-6">
                            We source products from reliable international markets, especially China and other textile-producing regions, ensuring access to the latest designs, durable materials, and competitive pricing.
                        </p>

                        {/* Social Icons */}
                        {/*<div className="flex items-center gap-2">*/}
                        {/*    {socialLinks.map((social) => (*/}
                        {/*        <a*/}
                        {/*            key={social.label}*/}
                        {/*            href={social.href}*/}
                        {/*            target="_blank"*/}
                        {/*            rel="noopener noreferrer"*/}
                        {/*            aria-label={social.label}*/}
                        {/*            className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-indigo-600 text-slate-400 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-lg hover:shadow-indigo-500/25"*/}
                        {/*        >*/}
                        {/*            {social.icon}*/}
                        {/*        </a>*/}
                        {/*    ))}*/}
                        {/*</div>*/}
                    </div>

                    {/* Column 2 — Quick Links */}
                    <div>
                        <h3 className="text-sm font-semibold text-white uppercase tracking-widest mb-5">
                            Quick Links
                        </h3>
                        <ul className="space-y-2.5">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="group flex items-center gap-2 text-sm text-slate-400 hover:text-indigo-400 transition-colors duration-150"
                                    >
                                        <span className="w-1 h-1 rounded-full bg-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-150" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3 — Products */}
                    <div>
                        <h3 className="text-sm font-semibold text-white uppercase tracking-widest mb-5">
                            Products
                        </h3>
                        <ul className="space-y-2.5">
                            {products.map((product) => (
                                <li key={product.href}>
                                    <Link
                                        href={`/product/${product.href}`}
                                        className="group flex items-center gap-2 text-sm text-slate-400 hover:text-indigo-400 transition-colors duration-150"
                                    >
                                        <span className="w-1 h-1 rounded-full bg-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-150" />
                                        {product.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4 — Contact */}
                    <div>
                        <h3 className="text-sm font-semibold text-white uppercase tracking-widest mb-5">
                            Contact Us
                        </h3>
                        <ul className="space-y-4">
                            {/* Email */}
                            <li>
                                <a
                                    href="mailto:info@ashishent.com"
                                    className="group flex items-start gap-3 text-sm text-slate-400 hover:text-indigo-400 transition-colors duration-150"
                                >
                  <span className="mt-0.5 w-7 h-7 rounded-md bg-slate-800 group-hover:bg-indigo-600/20 flex items-center justify-center flex-shrink-0 transition-colors duration-150">
                    <svg className="w-3.5 h-3.5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                                    <span>info@ashishent.com</span>
                                </a>
                            </li>

                            {/* Phone */}
                            <li>
                                <a
                                    href="tel:+919958394954"
                                    className="group flex items-start gap-3 text-sm text-slate-400 hover:text-indigo-400 transition-colors duration-150"
                                >
                  <span className="mt-0.5 w-7 h-7 rounded-md bg-slate-800 group-hover:bg-indigo-600/20 flex items-center justify-center flex-shrink-0 transition-colors duration-150">
                    <svg className="w-3.5 h-3.5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </span>
                                    <span>+919958394954</span>
                                </a>
                            </li>

                            {/* Address */}
                            <li>
                                <div className="group flex items-start gap-3 text-sm text-slate-400">
                  <span className="mt-0.5 w-7 h-7 rounded-md bg-slate-800 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3.5 h-3.5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </span>
                                    <span className="leading-relaxed">
                    Delhi<br />
                    <br />

                  </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-xs text-slate-500">
                        © {currentYear} Ashish Enterprises All rights reserved.
                    </p>
                    <div className="flex items-center gap-1">
                            <span className={"text-xs text-slate-500  transition-colors"}>Build by</span>
                            <Link
                                href="https://www.yesonance.com/"
                                className="text-xs text-slate-500 hover:text-indigo-400 transition-colors duration-150"
                            >
                                Yesonance.com
                            </Link>

                    </div>
                </div>
            </div>
        </footer>
    );
}