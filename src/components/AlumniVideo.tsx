"use client";

import { useEffect, useRef, useState } from "react";

const alumniVideos = [
    {
        id: 1,
        name: "Sobirin",
        title: "Alumni - Mahasiswa Ilmu Komputer UIN Saizu Purwokerto",
        videoUrl: "/assets/18.mp4",
    },
];

export default function AlumniVideo() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [playingVideo, setPlayingVideo] = useState<number | null>(null);

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
            id="alumni"
            className="section-padding bg-gradient-to-b from-[#FFF8E7] to-white"
        >
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div
                    className={`text-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                >
                    <span className="inline-block px-4 py-1 bg-[#800020]/10 text-[#800020] rounded-full text-sm font-medium mb-4">
                        Testimoni
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#800020] mb-4">
                        Video Alumni
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Dengarkan cerita sukses dari para alumni SMA An-Nuriyyah Bumiayu
                    </p>
                </div>

                {/* Video Grid */}
                <div
                    className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-700 delay-200 ${isVisible ? "opacity-100" : "opacity-0"
                        }`}
                >
                    {alumniVideos.map((video, index) => (
                        <div
                            key={video.id}
                            className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 card-hover ${isVisible
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-10"
                                }`}
                            style={{ transitionDelay: `${index * 0.1}s` }}
                        >
                            {/* Video Thumbnail */}
                            <div
                                className="relative aspect-video cursor-pointer"
                                onClick={() => setPlayingVideo(video.id)}
                            >
                                <video
                                    src={video.videoUrl}
                                    muted
                                    preload="metadata"
                                    className="w-full h-full object-cover"
                                />
                                {/* Play Button Overlay */}
                                <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                                    <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                        <svg
                                            className="w-8 h-8 text-[#800020] ml-1"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Alumni Info */}
                            <div className="p-4">
                                <h4 className="font-bold text-[#800020] text-lg">{video.name}</h4>
                                <p className="text-sm text-gray-600">{video.title}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Video Modal */}
                {playingVideo !== null && (
                    <div
                        className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
                        onClick={() => setPlayingVideo(null)}
                    >
                        <button
                            className="absolute top-4 right-4 text-white text-4xl hover:text-[#D4AF37] transition-colors z-10"
                            onClick={() => setPlayingVideo(null)}
                        >
                            ×
                        </button>
                        <div
                            className="w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <video
                                src={alumniVideos.find(v => v.id === playingVideo)?.videoUrl}
                                controls
                                autoPlay
                                className="w-full h-full object-contain"
                            >
                                Browser Anda tidak mendukung tag video.
                            </video>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
