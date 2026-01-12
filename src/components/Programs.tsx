"use client";

import { useEffect, useRef, useState } from "react";

const programs = [
    {
        id: "mabit",
        name: "MABIT",
        fullName: "Malam Bimbingan Iman & Taqwa",
        image: "/assets/mabit.jpeg",
        description:
            "Program pembinaan spiritual malam hari untuk memperkuat iman dan taqwa siswa melalui dzikir, tausiyah, dan qiyamul lail.",
        color: "from-purple-600 to-indigo-700",
    },
    {
        id: "sabsah",
        name: "SABSAH",
        fullName: "Sabtu Sehat",
        image: "/assets/sabsah.jpeg",
        description:
            "Kegiatan olahraga dan senam rutin setiap Sabtu pagi untuk menjaga kesehatan jasmani siswa.",
        color: "from-green-500 to-emerald-600",
    },
    {
        id: "ekstra",
        name: "EKSTRA",
        fullName: "Kegiatan Ekstrakurikuler",
        image: "/assets/ekstra.jpeg",
        description:
            "Berbagai kegiatan ekstrakurikuler untuk mengembangkan bakat dan minat siswa.",
        color: "from-[#800020] to-[#5c0017]",
    },
];

export default function Programs() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [activeProgram, setActiveProgram] = useState<string | null>(null);

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
            id="programs"
            className="section-padding bg-gradient-to-b from-white to-[#FFF8E7]"
        >
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div
                    className={`text-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                >
                    <span className="inline-block px-4 py-1 bg-[#800020]/10 text-[#800020] rounded-full text-sm font-medium mb-4">
                        Keunggulan Kami
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#800020] mb-4">
                        Program Unggulan
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Program khusus untuk membentuk karakter dan prestasi siswa
                    </p>
                </div>

                {/* Program Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {programs.map((program, index) => (
                        <div
                            key={program.id}
                            className={`group relative overflow-hidden rounded-2xl transition-all duration-500 aspect-[3/4] ${isVisible
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-10"
                                }`}
                            style={{ transitionDelay: `${index * 0.15}s` }}
                            onMouseEnter={() => setActiveProgram(program.id)}
                            onMouseLeave={() => setActiveProgram(null)}
                        >
                            {/* Fullscreen Image Background */}
                            <img
                                src={program.image}
                                alt={program.name}
                                className={`absolute inset-0 w-full h-full object-cover transition-transform duration-500 ${activeProgram === program.id ? "scale-110" : "scale-100"
                                    }`}
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                            {/* Content on top */}
                            <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                                {/* Title */}
                                <h3 className="text-3xl font-bold mb-1 drop-shadow-lg">{program.name}</h3>
                                <p className="text-white/90 text-sm font-medium mb-3">{program.fullName}</p>

                                {/* Description */}
                                <p
                                    className={`text-white/80 text-sm leading-relaxed transition-all duration-300 ${activeProgram === program.id
                                        ? "opacity-100 translate-y-0 max-h-24"
                                        : "opacity-0 translate-y-4 max-h-0"
                                        } overflow-hidden`}
                                >
                                    {program.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
