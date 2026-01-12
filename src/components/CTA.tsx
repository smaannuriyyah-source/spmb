"use client";

import { useEffect, useRef, useState } from "react";

export default function CTA() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const whatsappNumber = "628812945090";
    const whatsappMessage = encodeURIComponent(
        "Assalamualaikum, saya ingin bertanya tentang pendaftaran SMA An-Nuriyyah Bumiayu"
    );

    return (
        <section
            ref={sectionRef}
            id="cta"
            className="section-padding bg-gradient-to-br from-[#800020] via-[#5c0017] to-[#800020] relative overflow-hidden"
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-64 h-64 border-2 border-white rounded-full -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute top-1/2 right-0 w-96 h-96 border-2 border-white rounded-full translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 left-1/4 w-48 h-48 border-2 border-white rounded-full translate-y-1/2" />
            </div>

            <div className="max-w-4xl mx-auto text-center relative z-10">
                {/* Content */}
                <div
                    className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6 backdrop-blur-sm">
                        <span className="w-2 h-2 bg-[#D4AF37] rounded-full animate-pulse" />
                        <span className="text-white text-sm">
                            SPMB Tahun Pelajaran 2026/2027
                        </span>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Siap Menjadi Bagian dari{" "}
                        <span className="text-[#D4AF37]">Generasi ULIL ALBAB?</span>
                    </h2>

                    <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
                        Bergabunglah bersama keluarga besar SMA An-Nuriyyah Bumiayu.
                        Daftar sekarang dan raih masa depan cerahmu!
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="#registration"
                            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#D4AF37] hover:bg-[#e6c864] text-[#800020] font-bold text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                        >
                            <span>Daftar Sekarang</span>
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
                        </a>

                        <a
                            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold text-lg rounded-full border-2 border-white/30 backdrop-blur-sm transition-all duration-300 hover:scale-105"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            <span>Hubungi Admin</span>
                        </a>
                    </div>
                </div>

                {/* Stats */}
                <div
                    className={`grid grid-cols-3 gap-4 mt-16 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                >
                    <div className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                        <div className="text-3xl md:text-4xl font-bold text-[#D4AF37]">
                            200
                        </div>
                        <div className="text-white/70 text-sm mt-1">Kuota Murid Baru</div>
                    </div>
                    <div className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                        <div className="text-3xl md:text-4xl font-bold text-[#D4AF37]">
                            2026/2027
                        </div>
                        <div className="text-white/70 text-sm mt-1">Tahun Pelajaran</div>
                    </div>
                    <div className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                        <div className="text-3xl md:text-4xl font-bold text-[#D4AF37]">
                            B
                        </div>
                        <div className="text-white/70 text-sm mt-1">Akreditasi</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
