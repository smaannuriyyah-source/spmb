"use client";

import { useEffect, useRef, useState } from "react";

const missions = [
    {
        icon: "📖",
        title: "Keunggulan Lokal",
        description: "Menciptakan keunggulan lokal dengan karakter pendidikan Al-Qur'an",
    },
    {
        icon: "🔬",
        title: "Pembelajaran Ilmiah",
        description: "Menciptakan suasana pembelajaran, bimbingan dan pelatihan dengan mendasarkan diri pada kaidah-kaidah ilmiah",
    },
    {
        icon: "🎯",
        title: "Minat & Bakat",
        description: "Mendorong peserta didik untuk menemukan kemampuan minat dan bakat untuk persiapan diri menyesuaikan dengan masyarakat lingkungannya",
    },
    {
        icon: "⭐",
        title: "Nilai Kemanusiaan",
        description: "Menginternalisasi nilai-nilai kemanusiaan yang beradab dan bertanggung jawab",
    },
];

export default function Profile() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} id="profile" className="section-padding bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div
                    className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                >
                    <span className="inline-block px-4 py-1 bg-[#800020]/10 text-[#800020] rounded-full text-sm font-medium mb-4">
                        Tentang Kami
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#800020] mb-4">
                        Profil Sekolah
                    </h2>
                </div>

                {/* Vision */}
                <div
                    className={`max-w-3xl mx-auto mb-16 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                >
                    <div className="relative p-8 bg-gradient-to-br from-[#800020] to-[#5c0017] rounded-2xl shadow-xl text-center overflow-hidden">
                        {/* Decorative elements */}
                        <div className="absolute top-0 left-0 w-20 h-20 bg-[#D4AF37]/20 rounded-full -translate-x-1/2 -translate-y-1/2" />
                        <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#D4AF37]/10 rounded-full translate-x-1/2 translate-y-1/2" />

                        <div className="relative z-10">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#D4AF37] rounded-full mb-6">
                                <span className="text-3xl">🎓</span>
                            </div>
                            <h3 className="text-xl font-semibold text-[#D4AF37] mb-4 uppercase tracking-wide">
                                Visi
                            </h3>
                            <p className="text-xl md:text-2xl text-white font-light leading-relaxed">
                                Membentuk Generasi{" "}
                                <span className="font-bold text-[#D4AF37]">ULIL ALBAB</span>
                            </p>
                            <p className="text-white/80 mt-4 text-sm md:text-base">
                                (Unggul, Ilmiah, Amaliyah, Ibadah dan Bertanggung Jawab)
                            </p>
                        </div>
                    </div>
                </div>

                {/* Mission */}
                <div
                    className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                >
                    <h3 className="text-2xl font-bold text-center text-[#800020] mb-8">
                        Misi Kami
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {missions.map((mission, index) => (
                            <div
                                key={index}
                                className="group p-6 bg-white rounded-xl border border-[#800020]/10 shadow-lg hover:shadow-xl transition-all duration-300 card-hover text-center"
                                style={{ animationDelay: `${(index + 1) * 0.1}s` }}
                            >
                                <div className="inline-flex items-center justify-center w-14 h-14 bg-[#FFF8E7] rounded-full mb-4 group-hover:scale-110 transition-transform">
                                    <span className="text-2xl">{mission.icon}</span>
                                </div>
                                <h4 className="font-semibold text-[#800020] mb-2">
                                    {mission.title}
                                </h4>
                                <p className="text-sm text-gray-600">{mission.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
