"use client";

import { useEffect, useRef, useState } from "react";

const extracurriculars = [
    // Row 1 & 2 (Left side)
    {
        name: "Pramuka",
        image: "/ekstra/Pramuka.jpeg",
        size: "large", // 2x2
        description: "Membentuk karakter disiplin dan mandiri"
    },
    // Row 1 & 2 (Middle)
    {
        name: "Paskibra",
        image: "/ekstra/Paskibra.jpeg",
        size: "tall", // 1x2
        description: "Pasukan Pengibar Bendera Sekolah"
    },
    // Row 1 (Right)
    {
        name: "Futsal",
        image: "/ekstra/Futsal.jpeg",
        size: "normal", // 1x1
        description: "Olahraga tim yang kompetitif"
    },
    // Row 2 (Right)
    {
        name: "Seni Tari",
        image: "/ekstra/Seni Tari.jpeg",
        size: "normal", // 1x1
        description: "Melestarikan budaya bangsa"
    },
    // Row 3 (Left)
    {
        name: "Komputer",
        image: "/ekstra/komputer.jpg",
        size: "wide", // 2x1
        description: "Penguasaan teknologi digital"
    },
    // Row 3 (Right)
    {
        name: "Hadroh",
        image: "/assets/mabit.jpeg",
        size: "wide", // 2x1
        description: "Seni musik Islami penyejuk hati"
    },
    // Row 4 (Left)
    {
        name: "English Club",
        image: "/ekstra/English Club.jpeg",
        size: "wide", // 2x1
        description: "Improve your English skills"
    },
    // Row 4 (Middle)
    {
        name: "PMR",
        image: "/ekstra/PMR.jpeg",
        size: "normal", // 1x1
        description: "Siap siaga membantu sesama"
    },
    // Row 4 (Right)
    {
        name: "BTQ",
        image: "/ekstra/BTQ.jpeg",
        size: "normal", // 1x1
        description: "Baca Tulis Al-Qur'an"
    },
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
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const getGridClass = (size: string) => {
        switch (size) {
            case "large":
                return "md:col-span-2 md:row-span-2 aspect-square md:aspect-auto";
            case "wide":
                return "md:col-span-2 md:row-span-1 aspect-[2/1] md:aspect-auto";
            case "tall":
                return "md:col-span-1 md:row-span-2 aspect-[1/2] md:aspect-auto";
            default:
                return "md:col-span-1 md:row-span-1 aspect-square md:aspect-auto";
        }
    };

    return (
        <section
            ref={sectionRef}
            id="extracurricular"
            className="section-padding bg-gray-50"
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
                        Jelajahi berbagai kegiatan menarik untuk mengembangkan bakatmu
                    </p>
                </div>

                {/* Bento Grid */}
                <div
                    className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[250px] md:auto-rows-[200px] transition-all duration-700 delay-200 ${isVisible ? "opacity-100" : "opacity-0"
                        }`}
                >
                    {extracurriculars.map((ekskul, index) => (
                        <div
                            key={index}
                            className={`group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 ${getGridClass(ekskul.size || "normal")}`}
                            style={{ transitionDelay: `${index * 0.05}s` }}
                        >
                            {/* Background Image */}
                            <img
                                src={ekskul.image}
                                alt={ekskul.name}
                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                            />

                            {/* Overlay Gradient (Always visible for text readability) */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                            {/* Content */}
                            <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                                <LinkArrow />
                                <h4 className="text-xl md:text-2xl font-bold mb-1 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                    {ekskul.name}
                                </h4>
                                <p className="text-white/90 text-sm transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100 line-clamp-2">
                                    {ekskul.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Simple arrow component for visual flair
function LinkArrow() {
    return (
        <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-500">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
        </div>
    );
}
