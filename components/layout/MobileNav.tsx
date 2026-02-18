"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

interface NavItem {
    label: string;
    href: string;
}

interface MobileNavProps {
    items: NavItem[];
}

export function MobileNav({ items }: MobileNavProps) {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    // Close menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    return (
        <div className="md:hidden">
            <Button
                variant="ghost"
                size="icon"
                className="relative z-50 text-gray-800 hover:bg-gray-100"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle Menu"
            >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>

            {/* Backdrop */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Mobile Menu Panel */}
            <div
                className={`fixed top-0 right-0 z-40 h-full w-[80%] max-w-sm bg-white shadow-2xl transition-transform duration-300 ease-in-out transform ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex flex-col h-full pt-24 px-6 pb-6 overflow-y-auto">
                    <nav className="flex flex-col space-y-6">
                        {items.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`text-lg font-medium transition-colors ${pathname === item.href
                                        ? "text-[var(--color-primary)] font-bold"
                                        : "text-gray-700 hover:text-[var(--color-primary)]"
                                    }`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    <div className="mt-auto pt-8 border-t border-gray-100">
                        <div className="flex flex-col gap-4">
                            <Button asChild size="lg" className="w-full bg-[var(--color-accent)] text-white hover:bg-[#b0902b]">
                                <Link href="/certification/apply">Apply for Certification</Link>
                            </Button>
                            <div className="text-center text-sm text-gray-500 mt-4">
                                <p>© {new Date().getFullYear()} BARB Sri Lanka</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
