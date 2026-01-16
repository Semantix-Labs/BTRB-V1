import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ContentBlockProps {
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
    className?: string;
    align?: "left" | "right";
}

export function ContentBlock({
    title,
    description,
    buttonText,
    buttonLink,
    className,
    align = "left"
}: ContentBlockProps) {
    return (
        <div className={cn("py-24", className)}>
            <div className="container mx-auto px-4 md:px-6">
                <div className={cn(
                    "flex flex-col gap-12 items-center",
                    align === "left" ? "lg:flex-row" : "lg:flex-row-reverse"
                )}>
                    {/* Text Column */}
                    <div className="flex-1 text-center lg:text-left">
                        <h2 className="text-3xl lg:text-4xl font-bold font-heading text-[var(--color-primary)] mb-6 leading-tight">{title}</h2>
                        <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
                            {description}
                        </p>
                        <Button asChild size="lg" className="bg-[var(--color-secondary)] hover:bg-[var(--color-primary)] h-12 px-8 text-base">
                            <Link href={buttonLink}>{buttonText}</Link>
                        </Button>
                    </div>

                    {/* Visual Column (Enhanced) */}
                    <div className="flex-1 w-full relative perspective-1000">
                        <div className={cn(
                            "aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:rotate-1 hover:scale-[1.02]",
                            "bg-gradient-to-br from-white to-gray-50 border border-white/50",
                            "relative"
                        )}>
                            {/* Glassmorphic Overlay */}
                            <div className="absolute inset-0 bg-white/40 backdrop-blur-sm z-10" />

                            {/* Content Representation */}
                            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-8">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--color-primary)] to-blue-600 shadow-lg flex items-center justify-center text-white mb-6">
                                    <span className="text-2xl font-bold">{title.charAt(0)}</span>
                                </div>
                                <div className="space-y-3 w-full max-w-[200px] opacity-60">
                                    <div className="h-2 bg-gray-300 rounded-full w-full" />
                                    <div className="h-2 bg-gray-300 rounded-full w-3/4 mx-auto" />
                                    <div className="h-2 bg-gray-300 rounded-full w-5/6 mx-auto" />
                                </div>
                            </div>

                            {/* Decorative Gradients */}
                            <div className={cn(
                                "absolute w-40 h-40 rounded-full blur-3xl opacity-30 z-0",
                                align === "left" ? "top-0 right-0 bg-blue-400" : "bottom-0 left-0 bg-[var(--color-secondary)]"
                            )} />
                        </div>

                        {/* Decorative blob behind */}
                        <div className={cn(
                            "absolute -z-10 w-full h-full top-6 opacity-30 blur-2xl rounded-full",
                            align === "left" ? "-right-6 bg-[var(--color-accent)]" : "-left-6 bg-[var(--color-primary)]"
                        )} />
                    </div>
                </div>
            </div>
        </div>
    );
}
