import Link from "next/link";

import productDetail from "@/data/product-detail";
import Logo from "@/components/ui/logo";
const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Products", href: "/product" },
    { label: "Contact", href: "/contact" },
];




export default function Footer() {
    const products = [0,1,2,3].map(index => ({label: productDetail[index].name, href: productDetail[index].id}));

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

                            <Logo variant={"white"}/>


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
                            <li >
                                <Link
                                    href={`/product`}
                                    className="group flex items-center gap-2 text-sm text-slate-400 hover:text-indigo-400 transition-colors duration-150"
                                >
                                    <span className="w-1 h-1 rounded-full bg-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-150" />
                                    More...
                                </Link>
                            </li>
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
                    B-72, 2nd floor, Sector-69, Noida<br />
                    UP-201301<br />

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