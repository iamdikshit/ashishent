"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

import Logo from "@/components/ui/logo";
const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Product", href: "/product" },
];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close menu on resize to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) setIsMenuOpen(false);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <header
            className={`sticky bg-white/95 top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? "bg-white/95 backdrop-blur-md shadow-sm  "
                    : "bg-transparent"
            }`}
        >

            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
                <div className="flex items-center justify-between h-16 md:h-20">

                    {/* Logo */}

                        {/*<Image src={"/images/logo/logo1.png"} alt={"Logo"}*/}
                        {/*       width={150}*/}
                        {/*       height={50}*/}
                        {/*/>*/}
                        <Logo/>


                    {/* Desktop Nav Links */}
                    <ul className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 group ${
                                        isScrolled
                                            ? "text-slate-600 hover:text-indigo-600 hover:bg-indigo-50"
                                            : "text-black/80 hover:text-black hover:bg-white/10"
                                    }`}
                                >
                                    {link.label}
                                    <span className="absolute bottom-1 left-4 right-4 h-px bg-indigo-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left rounded-full" />
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Desktop CTA */}
                    <div className="hidden md:flex items-center gap-3">

                        <Link
                            href="/contact"
                            className="text-sm font-semibold px-5 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 active:scale-95 transition-all duration-200 shadow-sm hover:shadow-indigo-200 hover:shadow-md"
                        >
                           Contact Us
                        </Link>
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                        aria-expanded={isMenuOpen}
                        className={`md:hidden p-2 rounded-lg transition-colors duration-200 z-50 ${
                            isScrolled
                                ? "text-slate-700 hover:bg-slate-100"
                                : "text-black hover:bg-black/10"
                        }`}
                    >
                        <span className="block w-5 h-px bg-current transition-all duration-300" style={{ transform: isMenuOpen ? "translateY(7px) rotate(45deg)" : undefined }} />
                        <span className="block w-5 h-px bg-current my-1.5 transition-all duration-300" style={{ opacity: isMenuOpen ? 0 : 1 }} />
                        <span className="block w-5 h-px bg-current transition-all duration-300" style={{ transform: isMenuOpen ? "translateY(-7px) rotate(-45deg)" : undefined }} />
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Drawer */}
            <div
                className={` absolute w-full top-0  md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
                    isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                }`}
            >
                <div className="h-screen bg-white border-t border-slate-100 shadow-lg  ">
                    <ul className="px-4 py-3 space-y-1 mt-24">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-slate-700 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 transition-colors duration-150"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="px-4 pb-4 pt-2 border-t border-slate-100 flex flex-col gap-2">

                        <Link
                            href="/contact"
                            onClick={() => setIsMenuOpen(false)}
                            className="w-full text-center px-4 py-2.5 text-sm font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors duration-150 shadow-sm"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}