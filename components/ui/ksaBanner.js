import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const KsaBanner = () => {
    const containerRefs = useRef([]);
    const [loadedImages, setLoadedImages] = useState([false, false, false]);

    const handleImageLoad = (index) => {
        setLoadedImages((prev) => {
            const newLoadedImages = [...prev];
            newLoadedImages[index] = true;
            return newLoadedImages;
        });
    };

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'scale(1)';
                } else {
                    entry.target.style.opacity = '0';
                    entry.target.style.transform = 'scale(0.95)'; // Start slightly smaller
                }
            });
        }, { threshold: 0.5 });

        containerRefs.current.forEach(container => {
            if (container) observer.observe(container);
        });

        return () => containerRefs.current.forEach(container => {
            if (container) observer.unobserve(container);
        });
    }, []);

    return (
        <section className="relative bg-gray-900 overflow-hidden">
            {["/featured1.webp", "/featured2.webp", "/featured3.webp"].map((src, index) => (
                <div
                    key={index}
                    className="relative w-full aspect-w-16 aspect-h-9"
                    ref={(el) => containerRefs.current[index] = el}
                    style={{
                        position: 'relative',
                        overflow: 'hidden',
                        transition: 'transform 0.5s ease, opacity 0.6s ease',
                        opacity: loadedImages[index] ? 1 : 0,
                        transform: loadedImages[index] ? 'scale(1)' : 'scale(0.95)',
                    }}
                >
                    <Image
                        src={src}
                        alt={`Banner ${index + 1}`}
                        layout="responsive"
                        width={1920}
                        height={1200}
                        onLoad={() => handleImageLoad(index)}
                        style={{
                            transition: 'opacity 0.6s ease',
                            opacity: loadedImages[index] ? 1 : 0,
                        }}
                    />
                    <div className="absolute bottom-8 left-8 z-20 text-left">
                        <h2 className="text-2xl md:text-3xl font-bold text-white drop-shadow-md">
                            {index === 0 ? "A Modern Townhouse Design in KSA" : index === 1 ? "Simplicity Redefined: A Versatile Modern Villa Design" : "A Luxury Private Mansion in a Modern Design"}
                        </h2>
                        <h3 className="text-lg md:text-xl font-light text-white drop-shadow-md mt-2">
                            {index === 0 ? "Townhouse Lara Community, Mohammadiya, KSA" : index === 1 ? "White Pearl Villa, Pearl Jumeirah, Dubai" : "Private Mansion, District One"}
                        </h3>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default KsaBanner;
