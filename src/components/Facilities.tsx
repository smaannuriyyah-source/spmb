"use client";

import { useEffect, useRef, useState } from "react";

const facilities = [
    { icon: "💻", name: "Lab Komputer", description: "Laboratorium komputer yang representatif" },
    { icon: "🎧", name: "Lab Bahasa", description: "Laboratorium bahasa dengan sistem multimedia" },
    { icon: "🔬", name: "Lab IPA", description: "Laboratorium IPA lengkap" },
    { icon: "📺", name: "Kelas LCD", description: "Ruang kelas dengan fasilitas LCD proyektor setiap ruang" },
    { icon: "📚", name: "Perpustakaan", description: "Koleksi buku lengkap dan nyaman" },
    { icon: "🏛", name: "Aula Sekolah", description: "Aula serbaguna kapasitas besar" },
    { icon: "📶", name: "Hotspot Area", description: "Akses WiFi di seluruh area sekolah" },
    { icon: "🏠", name: "Pondok Pesantren", description: "Untuk murid dari luar kota Bumiayu dengan biaya terjangkau" },
];

export default function Facilities() {
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
        <section ref={sectionRef} id="facilities" className="section-padding bg-[#FFF8E7]">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div
                    className={`text-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                >
                    <span className="inline-block px-4 py-1 bg-[#800020]/10 text-[#800020] rounded-full text-sm font-medium mb-4">
                        Sarana & Prasarana
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#800020] mb-4">
                        Fasilitas
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Fasilitas lengkap untuk menunjang kegiatan belajar mengajar
                    </p>
                </div>

                {/* Facilities Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                    {facilities.map((facility, index) => (
                        <div
                            key={index}
                            className={`group p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 card-hover text-center ${isVisible
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-10"
                                }`}
                            style={{ transitionDelay: `${index * 0.05}s` }}
                        >
                            <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#800020] to-[#5c0017] rounded-xl mb-4 group-hover:scale-110 transition-transform shadow-lg">
                                <span className="text-2xl">{facility.icon}</span>
                            </div>
                            <h4 className="font-semibold text-[#800020] mb-1">
                                {facility.name}
                            </h4>
                            <p className="text-xs text-gray-500">{facility.description}</p>
                        </div>
                    ))}
                </div>

                {/* Note about pesantren */}
                <div
                    className={`mt-8 p-4 bg-white rounded-xl shadow-md transition-all duration-700 delay-300 ${isVisible ? "opacity-100" : "opacity-0"
                        }`}
                >
                    <p className="text-sm text-gray-600 text-center">
                        <span className="font-semibold text-[#800020]">📿 Bobot materi agama memadai dan independen.</span>
                    </p>
                </div>
            </div>
        </section>
    );
}
