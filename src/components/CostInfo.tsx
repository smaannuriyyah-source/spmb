"use client";

import { useEffect, useRef, useState } from "react";

const costItems = [
    { item: "Seragam Sekolah (Ciri Khusus, Olahraga dan Jas Almamater)", price: "Rp 600.000" },
    { item: "Test Pemetaan dan Masa Orientasi", price: "Rp 125.000" },
    { item: "Kegiatan Kesiswaan dan Osis", price: "Rp 150.000" },
    { item: "Pengembangan dan Komputer", price: "Rp 150.000" },
    { item: "Badge Atribut Sekolah, dasi dan kartu", price: "Rp 75.000" },
    { item: "SPP Bulan Juli 2026", price: "Rp 100.000" },
];

const requirements = [
    "Mengisi formulir pendaftaran yang telah disediakan",
    "Murid merupakan lulusan SMP/MTs/Paket B",
    "Melampirkan fotokopi ijazah, SKL (Surat Keterangan Lulus) yang ditandatangani Kepala Sekolah",
    "Melampirkan fotokopi orang tua sebanyak 2 (dua) lembar",
    "Melampirkan fotokopi Kartu Keluarga (KK) sebanyak 2 (dua) lembar",
    "Melampirkan Kartu Bantuan Sosial (KIP/PKH) bagi yang memiliki",
    "Fotokopi Akta Kelahiran",
];

export default function CostInfo() {
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
            id="costs"
            className="section-padding bg-gradient-to-b from-white to-[#FFF8E7]"
        >
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Requirements Card */}
                    <div
                        className={`transition-all duration-700 ${isVisible
                                ? "opacity-100 translate-x-0"
                                : "opacity-0 -translate-x-10"
                            }`}
                    >
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full">
                            {/* Header */}
                            <div className="bg-gradient-to-r from-[#800020] to-[#5c0017] p-4 text-center">
                                <h3 className="text-xl font-bold text-white">Syarat Pendaftaran</h3>
                            </div>

                            {/* Items */}
                            <div className="p-6">
                                <ul className="space-y-3">
                                    {requirements.map((req, index) => (
                                        <li
                                            key={index}
                                            className="flex items-start gap-3 text-sm text-gray-700"
                                        >
                                            <svg
                                                className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                />
                                            </svg>
                                            {req}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Cost Card */}
                    <div
                        className={`transition-all duration-700 delay-200 ${isVisible
                                ? "opacity-100 translate-x-0"
                                : "opacity-0 translate-x-10"
                            }`}
                    >
                        <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
                            {/* Header */}
                            <div className="bg-gradient-to-r from-[#D4AF37] to-[#a88a2c] p-4 text-center">
                                <h3 className="text-xl font-bold text-[#800020]">Rincian Biaya</h3>
                            </div>

                            {/* Items */}
                            <div className="p-6">
                                <table className="w-full">
                                    <tbody>
                                        {costItems.map((item, index) => (
                                            <tr key={index} className="border-b border-gray-100 last:border-0">
                                                <td className="py-3 text-sm text-gray-700">{index + 1}. {item.item}</td>
                                                <td className="py-3 text-sm text-gray-800 font-medium text-right whitespace-nowrap">{item.price}</td>
                                            </tr>
                                        ))}
                                        <tr className="bg-[#800020] text-white">
                                            <td className="py-3 px-2 font-bold">Total</td>
                                            <td className="py-3 px-2 font-bold text-right text-[#D4AF37]">Rp 1.200.000</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            {/* Decorative */}
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#D4AF37]/20 rounded-full" />
                        </div>

                        {/* Registration Period */}
                        <div className="mt-6 p-6 bg-white rounded-2xl shadow-xl border-l-4 border-[#D4AF37]">
                            <div className="flex items-center gap-4">
                                <div className="text-4xl">📅</div>
                                <div>
                                    <div className="text-sm text-gray-500 mb-1">Waktu Pendaftaran</div>
                                    <div className="text-xl font-bold text-[#800020]">
                                        Desember 2025 - Juni 2026
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 p-3 bg-[#FFF8E7] rounded-lg">
                                <p className="text-sm text-[#800020] font-medium flex items-center gap-2">
                                    <span>📢</span>
                                    Terbatas 200 Murid Baru!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
