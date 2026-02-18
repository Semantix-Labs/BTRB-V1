import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Certification", href: "/certification" },
    { label: "Training", href: "/training" },
    { label: "Donate", href: "/donate" },
    { label: "Contact", href: "/contact" },
];

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
            <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
                {/* Logo Area */}
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/logo.png"
                        alt="BARB Logo"
                        width={180}
                        height={60}
                        className="h-12 w-auto"
                        priority
                    />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-sm font-medium text-gray-700 hover:text-[var(--color-primary)] transition-colors"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                {/* CTA & Mobile Menu Trigger (Placeholder) */}
                <div className="flex items-center gap-4">
                    <Button asChild className="hidden md:inline-flex bg-[var(--color-accent)] text-white hover:bg-[#b0902b]">
                        <Link href="/certification/apply">Apply for Certification</Link>
                    </Button>
                    {/* Mobile menu would go here */}
                </div>
            </div>
        </header>
    );
}
