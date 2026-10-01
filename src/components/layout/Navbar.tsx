"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, ShoppingCart, X } from "lucide-react";
import Container from "@/components/ui/Container";
import { authLinks, navLinks } from "@/data/navLinks";
import Logo from "../ui/Logo";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="text-gray-50">
            <Container className="flex items-center justify-between py-8">
                <Link href="/" aria-label="ByteSpace home">
                    <Logo />
                </Link>

                <nav className="hidden gap-8 text-sm md:flex">
                    {navLinks.map((link) => (
                        <Link key={link.label} href={link.href} className="hover:text-lime-400">
                            {link.label}
                        </Link>
                    ))}
                </nav>

                <div className="hidden items-center gap-6 text-sm md:flex">
                    {authLinks.map((link) => (
                        <Link key={link.label} href={link.href} className="hover:text-lime-400">
                            {link.label}
                        </Link>
                    ))}
                    <ShoppingCart size={16} aria-label="Cart" />
                </div>

                <button
                    className="md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </Container>

            {isOpen && (
                <nav className="flex flex-col gap-4 px-4 pb-6 md:hidden">
                    {[...navLinks, ...authLinks].map((link) => (
                        <Link key={link.label} href={link.href} onClick={() => setIsOpen(false)}>
                            {link.label}
                        </Link>
                    ))}
                </nav>
            )}
        </header>
    );
}