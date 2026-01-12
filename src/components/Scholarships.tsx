"use client";

import { useEffect, useRef, useState } from "react";

const scholarships = [
    {
        rank: "Ranking 1",
        icon: "🥇",
        benefits: ["Bebas uang daftar ulang", "Gratis SPP 6 Bulan"],
        color: "from-yellow-400 to-amber-500",
        bgColor: "bg-yellow-50",
    },
    {
        rank: "Ranking 2",
        icon: "🥈",
        benefits: ["Bebas uang daftar ulang", "Gratis SPP 3 Bulan"],
        color: "from-gray-300 to-gray-400",
        bgColor: "bg-gray-50",
    },
    {
        rank: "Ranking 3",
        icon: "🥉",
        benefits: ["Uang Daftar Ulang Diskon 50%"],
        color: "from-orange-400 to-amber-600",
        bgColor: "bg-orange-50",
    },
];

const specialScholarships = [
    {
        icon: "🎗",
        title: "Beasiswa Yatim Piatu",
        description: "Beasiswa dari yayasan dan donatur yang tidak mengikat untuk anak yatim piatu",
    },
    {
        icon: "💝",
        title: "Beasiswa Tidak Mampu",
        description: "Bantuan khusus untuk anak-anak tidak mampu dari yayasan dan donatur",
    },
];

export default function Scholarships() {
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
            id="scholarships"
            className="section-padding bg-gradient-to-b from-[#FFF8E7] to-white"
        >
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div
                    className={`text-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                >
                    <span className="inline-block px-4 py-1 bg-[#D4AF37]/20 text-[#800020] rounded-full text-sm font-medium mb-4">
                        Persyaratan Beasiswa
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#800020] mb-4">
                        Beasiswa & Keunggulan
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Berbagai bantuan untuk siswa berprestasi dan membutuhkan
                    </p>
                </div>

                {/* Ranking Scholarships */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {scholarships.map((scholarship, index) => (
                        <div
                            key={index}
                            className={`relative overflow-hidden rounded-2xl ${scholarship.bgColor} p-6 transition-all duration-500 card-hover ${isVisible
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-10"
                                }`}
                            style={{ transitionDelay: `${index * 0.1}s` }}
                        >
                            {/* Badge */}
                            <div
                                className={`absolute top-0 right-0 px-4 py-1 bg-gradient-to-r ${scholarship.color} text-white text-xs font-bold rounded-bl-xl`}
                            >
                                {scholarship.rank}
                            </div>

                            {/* Icon */}
                            <div className="text-6xl mb-4">{scholarship.icon}</div>

                            {/* Benefits */}
                            <ul className="space-y-2">
                                {scholarship.benefits.map((benefit, i) => (
                                    <li key={i} className="flex items-center gap-2 text-gray-700">
                                        <svg
                                            className="w-5 h-5 text-green-500 flex-shrink-0"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                        <span>{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Special Scholarships */}
                <div
                    className={`grid grid-cols-1 sm:grid-cols-2 gap-6 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                >
                    {specialScholarships.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
                        >
                            <div className="w-12 h-12 bg-[#800020]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                <span className="text-2xl">{item.icon}</span>
                            </div>
                            <div>
                                <h4 className="font-semibold text-[#800020] mb-1">
                                    {item.title}
                                </h4>
                                <p className="text-sm text-gray-600">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
