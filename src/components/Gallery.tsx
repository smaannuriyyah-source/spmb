"use client";

import { useEffect, useRef, useState } from "react";

const galleryImages = [
    { src: "/assets/3.jpeg", alt: "Kegiatan Siswa" },
    { src: "/assets/4.jpeg", alt: "Aktivitas Sekolah" },
    { src: "/assets/5.jpeg", alt: "Momen Berharga" },
    { src: "/assets/7.jpeg", alt: "Kebersamaan Siswa" },
    { src: "/assets/8.jpeg", alt: "Dokumentasi Kegiatan" },
    { src: "/assets/9.jpeg", alt: "Aktivitas Pembelajaran" },
    { src: "/assets/10.jpeg", alt: "Kegiatan Bersama" },
    { src: "/assets/12.jpeg", alt: "Momen Spesial" },
    { src: "/assets/13.jpeg", alt: "Suasana Sekolah" },
    { src: "/assets/14.jpeg", alt: "Dokumentasi Acara" },
    { src: "/assets/15.jpeg", alt: "Kegiatan Siswa" },
    { src: "/assets/16.jpeg", alt: "Aktivitas Sekolah" },
    { src: "/assets/17.jpeg", alt: "Momen Kebersamaan" },
    { src: "/assets/btq.jpeg", alt: "Baca Tulis Al-Qur'an" },
    { src: "/assets/ekstra.jpeg", alt: "Kegiatan Ekstrakurikuler" },
    { src: "/assets/mabit.jpeg", alt: "Malam Bina Iman dan Taqwa" },
    { src: "/assets/sabsah.jpeg", alt: "Sabtu Sehat" },
];

export default function Gallery() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

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
        <section ref={sectionRef} id="gallery" className="section-padding bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div
                    className={`text-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                >
                    <span className="inline-block px-4 py-1 bg-[#800020]/10 text-[#800020] rounded-full text-sm font-medium mb-4">
                        Dokumentasi
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#800020] mb-4">
                        Gallery Kegiatan
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Momen-momen berharga kegiatan siswa SMA An-Nuriyyah Bumiayu
                    </p>
                </div>

                {/* Gallery Grid */}
                <div
                    className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 transition-all duration-700 delay-200 ${isVisible ? "opacity-100" : "opacity-0"
                        }`}
                >
                    {galleryImages.map((image, index) => (
                        <div
                            key={index}
                            className={`group relative aspect-[3/2] rounded-xl overflow-hidden shadow-lg cursor-pointer transition-all duration-300 hover:shadow-xl ${isVisible
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-10"
                                }`}
                            style={{ transitionDelay: `${index * 0.05}s` }}
                            onClick={() => setSelectedImage(index)}
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-0 left-0 right-0 p-4">
                                    <p className="text-white text-sm font-medium">{image.alt}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Lightbox Modal */}
                {selectedImage !== null && (
                    <div
                        className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="absolute top-4 right-4 text-white text-4xl hover:text-[#D4AF37] transition-colors"
                            onClick={() => setSelectedImage(null)}
                        >
                            ×
                        </button>
                        <img
                            src={galleryImages[selectedImage].src}
                            alt={galleryImages[selectedImage].alt}
                            className="max-w-full max-h-[80vh] object-contain rounded-xl"
                        />
                        <div className="absolute bottom-4 left-0 right-0 text-center">
                            <p className="text-white text-lg">{galleryImages[selectedImage].alt}</p>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
