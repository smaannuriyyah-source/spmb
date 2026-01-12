"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
    const heroRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate-fadeInUp");
                    }
                });
            },
            { threshold: 0.1 }
        );

        const elements = heroRef.current?.querySelectorAll(".animate-on-scroll");
        elements?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    const scrollToNext = () => {
        document.getElementById("campus")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            ref={heroRef}
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('/isometric_campus.png')",
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                {/* Badge */}
                <div className="animate-on-scroll opacity-0 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6">
                    <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
                    <span className="text-white text-sm font-medium">
                        Pendaftaran Dibuka Desember 2025 - Juni 2026
                    </span>
                </div>

                {/* Title */}
                <h1 className="animate-on-scroll opacity-0 delay-100 text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 drop-shadow-lg">
                    SMA{" "}
                    <span className="text-[#D4AF37]">AN-NURIYYAH</span>
                    <br />
                    BUMIAYU
                </h1>

                {/* Tagline */}
                <p className="animate-on-scroll opacity-0 delay-200 text-xl md:text-2xl text-white/90 font-light mb-8 italic">
                    "Membentuk Generasi <span className="font-semibold text-[#D4AF37]">Ulil Albab</span>"
                </p>

                {/* Subtitle */}
                <p className="animate-on-scroll opacity-0 delay-300 text-sm md:text-base text-white/80 max-w-2xl mx-auto mb-10">
                    Unggul • Ilmiah • Amaliyah • Ibadah • Bertanggung Jawab
                </p>

                {/* CTA Button */}
                <button
                    onClick={scrollToNext}
                    className="animate-on-scroll opacity-0 delay-400 group relative px-8 py-4 bg-[#D4AF37] hover:bg-[#e6c864] text-[#800020] font-semibold text-lg rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                    <span className="relative z-10 flex items-center gap-2">
                        Mulai Jelajahi Sekolah
                        <svg
                            className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </span>
                </button>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow">
                <div className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
                    <div className="w-1 h-2 bg-white/80 rounded-full animate-bounce" />
                </div>
            </div>
        </section>
    );
}
