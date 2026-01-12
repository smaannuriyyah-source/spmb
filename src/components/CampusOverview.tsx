"use client";

import { useState, useEffect, useRef } from "react";

const buildings = [
    {
        id: "gedung-kelas",
        name: "Gedung Kelas",
        description: "Ruang kelas dilengkapi LCD proyektor dan pendingin ruangan untuk kenyamanan belajar.",
        position: { top: "35%", left: "55%" },
    },
    {
        id: "laboratorium",
        name: "Laboratorium",
        description: "Lab IPA, Komputer, dan Bahasa dengan peralatan modern untuk praktikum.",
        position: { top: "28%", left: "35%" },
    },
    {
        id: "perpustakaan",
        name: "Perpustakaan",
        description: "Koleksi buku lengkap dan ruang baca nyaman untuk menunjang pembelajaran.",
        position: { top: "45%", left: "70%" },
    },
    {
        id: "lapangan",
        name: "Lapangan Olahraga",
        description: "Lapangan futsal dan voli untuk kegiatan olahraga dan ekstrakurikuler.",
        position: { top: "25%", left: "75%" },
    },
];

export default function CampusOverview() {
    const [activeBuilding, setActiveBuilding] = useState<string | null>(null);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

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
            id="campus"
            className="section-padding bg-gradient-to-b from-[#FFF8E7] to-white"
        >
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div
                    className={`text-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                >
                    <span className="inline-block px-4 py-1 bg-[#800020]/10 text-[#800020] rounded-full text-sm font-medium mb-4">
                        Jelajahi Kampus Kami
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#800020] mb-4">
                        Peta Kampus Interaktif
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Klik pada area untuk melihat detail fasilitas
                    </p>
                </div>

                {/* Interactive Map */}
                <div
                    className={`relative aspect-video max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl transition-all duration-700 delay-200 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                        }`}
                >
                    <img
                        src="/isometric_campus.png"
                        alt="Peta Kampus SMA An-Nuriyyah"
                        className="w-full h-full object-cover"
                    />

                    {/* Hotspots */}
                    {buildings.map((building, index) => (
                        <button
                            key={building.id}
                            onClick={() =>
                                setActiveBuilding(
                                    activeBuilding === building.id ? null : building.id
                                )
                            }
                            className={`absolute w-8 h-8 rounded-full bg-[#D4AF37] border-4 border-white shadow-lg transform -translate-x-1/2 -translate-y-1/2 hover:scale-125 transition-all duration-300 cursor-pointer ${activeBuilding === building.id ? "scale-125 ring-4 ring-[#D4AF37]/50" : ""
                                }`}
                            style={{
                                top: building.position.top,
                                left: building.position.left,
                                animationDelay: `${index * 0.1}s`,
                            }}
                        >
                            <span className="absolute inset-0 rounded-full bg-[#D4AF37] animate-ping opacity-50" />
                            <span className="sr-only">{building.name}</span>
                        </button>
                    ))}

                    {/* Info Popup */}
                    {activeBuilding && (
                        <div className="absolute bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-72 glass rounded-xl p-4 shadow-xl animate-fadeInUp">
                            <button
                                onClick={() => setActiveBuilding(null)}
                                className="absolute top-2 right-2 w-6 h-6 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            <h3 className="font-bold text-[#800020] text-lg mb-2">
                                {buildings.find((b) => b.id === activeBuilding)?.name}
                            </h3>
                            <p className="text-sm text-gray-600">
                                {buildings.find((b) => b.id === activeBuilding)?.description}
                            </p>
                        </div>
                    )}
                </div>

                {/* Building List */}
                <div className="flex flex-wrap justify-center gap-3 mt-8">
                    {buildings.map((building) => (
                        <button
                            key={building.id}
                            onClick={() =>
                                setActiveBuilding(
                                    activeBuilding === building.id ? null : building.id
                                )
                            }
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeBuilding === building.id
                                ? "bg-[#800020] text-white"
                                : "bg-white text-[#800020] border border-[#800020]/20 hover:bg-[#800020]/10"
                                }`}
                        >
                            {building.name}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}
