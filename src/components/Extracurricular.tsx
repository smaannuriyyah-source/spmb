"use client";

import { useEffect, useRef, useState } from "react";

const extracurriculars = [
    { name: "Pramuka", image: "https://placehold.co/400x300/800020/D4AF37?text=Pramuka" },
    { name: "Paskibra", image: "https://placehold.co/400x300/800020/D4AF37?text=Paskibra" },
    { name: "Futsal", image: "https://placehold.co/400x300/800020/D4AF37?text=Futsal" },
    { name: "Voli", image: "https://placehold.co/400x300/800020/D4AF37?text=Voli" },
    { name: "Komputer", image: "https://placehold.co/400x300/800020/D4AF37?text=Komputer" },
    { name: "Seni Tari", image: "https://placehold.co/400x300/800020/D4AF37?text=Seni+Tari" },
    { name: "PMR", image: "https://placehold.co/400x300/800020/D4AF37?text=PMR" },
    { name: "BTQ", image: "https://placehold.co/400x300/800020/D4AF37?text=BTQ" },
    { name: "English Club", image: "https://placehold.co/400x300/800020/D4AF37?text=English+Club" },
    { name: "Hadroh", image: "https://placehold.co/400x300/800020/D4AF37?text=Hadroh" },
];

export default function Extracurricular() {
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
        <section
            ref={sectionRef}
            id="extracurricular"
            className="section-padding bg-white"
        >
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div
                    className={`text-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                >
                    <span className="inline-block px-4 py-1 bg-[#800020]/10 text-[#800020] rounded-full text-sm font-medium mb-4">
                        Pengembangan Diri
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#800020] mb-4">
                        Ekstrakurikuler
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Berbagai kegiatan untuk mengembangkan minat dan bakat siswa
                    </p>
                </div>

                {/* Cards Grid */}
                <div
                    className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 transition-all duration-700 delay-200 ${isVisible ? "opacity-100" : "opacity-0"
                        }`}
                >
                    {extracurriculars.map((ekskul, index) => (
                        <div
                            key={index}
                            className={`group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 card-hover ${isVisible
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-10"
                                }`}
                            style={{ transitionDelay: `${index * 0.05}s` }}
                        >
                            {/* Image */}
                            <div className="aspect-[4/3] overflow-hidden">
                                <img
                                    src={ekskul.image}
                                    alt={ekskul.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>

                            {/* Name */}
                            <div className="p-3 bg-gradient-to-r from-[#800020] to-[#5c0017]">
                                <h4 className="text-white font-semibold text-center text-sm">
                                    {ekskul.name}
                                </h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
