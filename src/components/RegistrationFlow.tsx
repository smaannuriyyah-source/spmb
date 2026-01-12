"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
    {
        number: 1,
        title: "Isi Formulir",
        description: "Lengkapi formulir pendaftaran online atau datang langsung ke sekolah",
        icon: "📝",
    },
    {
        number: 2,
        title: "Lengkapi Berkas",
        description: "Siapkan fotokopi KK, akta, ijazah, dan pas foto 3x4",
        icon: "📁",
    },
    {
        number: 3,
        title: "Daftar Ulang",
        description: "Lakukan pembayaran dan konfirmasi pendaftaran",
        icon: "🎉",
    },
];

export default function RegistrationFlow() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [activeStep, setActiveStep] = useState(0);

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

    useEffect(() => {
        if (!isVisible) return;

        const interval = setInterval(() => {
            setActiveStep((prev) => (prev + 1) % steps.length);
        }, 2500);

        return () => clearInterval(interval);
    }, [isVisible]);

    return (
        <section ref={sectionRef} id="registration" className="section-padding bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div
                    className={`text-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                >
                    <span className="inline-block px-4 py-1 bg-[#800020]/10 text-[#800020] rounded-full text-sm font-medium mb-4">
                        Cara Daftar
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#800020] mb-4">
                        Alur Pendaftaran
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        3 langkah mudah untuk menjadi bagian dari SMA An-Nuriyyah
                    </p>
                </div>

                {/* Steps */}
                <div
                    className={`relative max-w-4xl mx-auto transition-all duration-700 delay-200 ${isVisible ? "opacity-100" : "opacity-0"
                        }`}
                >
                    {/* Desktop Timeline */}
                    <div className="hidden md:block">
                        {/* Progress Line */}
                        <div className="absolute top-16 left-0 right-0 h-1 bg-gray-200 rounded-full">
                            <div
                                className="h-full bg-gradient-to-r from-[#800020] to-[#D4AF37] rounded-full transition-all duration-500"
                                style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
                            />
                        </div>

                        {/* Steps */}
                        <div className="flex justify-between relative z-10">
                            {steps.map((step, index) => (
                                <div
                                    key={index}
                                    className={`flex flex-col items-center w-1/3 cursor-pointer transition-all duration-300 ${index <= activeStep ? "opacity-100" : "opacity-50"
                                        }`}
                                    onClick={() => setActiveStep(index)}
                                >
                                    {/* Circle */}
                                    <div
                                        className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-lg transition-all duration-300 ${index === activeStep
                                            ? "bg-[#D4AF37] scale-125"
                                            : index < activeStep
                                                ? "bg-[#800020]"
                                                : "bg-gray-300"
                                            }`}
                                    >
                                        {step.icon}
                                    </div>

                                    {/* Content */}
                                    <div className="mt-6 text-center">
                                        <div
                                            className={`text-sm font-bold mb-1 ${index === activeStep ? "text-[#D4AF37]" : "text-[#800020]"
                                                }`}
                                        >
                                            Langkah {step.number}
                                        </div>
                                        <h4 className="font-semibold text-gray-800">{step.title}</h4>
                                        <p
                                            className={`text-xs text-gray-500 mt-2 max-w-[180px] mx-auto transition-all duration-300 ${index === activeStep ? "opacity-100" : "opacity-0"
                                                }`}
                                        >
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Timeline */}
                    <div className="md:hidden space-y-4">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className={`flex items-start gap-4 p-4 rounded-xl transition-all duration-300 ${index === activeStep
                                    ? "bg-[#800020] text-white"
                                    : "bg-white border border-gray-200"
                                    }`}
                                onClick={() => setActiveStep(index)}
                            >
                                <div
                                    className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0 ${index === activeStep ? "bg-[#D4AF37]" : "bg-gray-100"
                                        }`}
                                >
                                    {step.icon}
                                </div>
                                <div>
                                    <div
                                        className={`text-xs font-medium mb-1 ${index === activeStep ? "text-[#D4AF37]" : "text-gray-400"
                                            }`}
                                    >
                                        Langkah {step.number}
                                    </div>
                                    <h4 className="font-semibold">{step.title}</h4>
                                    {index === activeStep && (
                                        <p className="text-sm text-white/80 mt-1">
                                            {step.description}
                                        </p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
