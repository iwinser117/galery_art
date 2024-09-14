"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaExpand, FaTimes } from "react-icons/fa";

const ComplexGallery = () => {
    const [expandedImage, setExpandedImage] = useState(null);

    const images = [
        {
            src: "https://images.unsplash.com/photo-1579541592065-da8a15e49bc7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXJ0ZSUyMHJlbmFjZW50aXN0YSUyMHBpbnR1cmF8ZW58MHwwfDB8fHwy",
            alt: "Obra de arte contemporáneo",
            description: "Esta es una obra de arte contemporáneo que desafía las convenciones tradicionales.",
        },
        {
            src: "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342",
            alt: "Escultura moderna",
            description: "Una escultura moderna que representa la fusión entre la naturaleza y la tecnología.",
        },
        {
            src: "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342",
            alt: "Escultura moderna",
            description: "Una escultura moderna que representa la fusión entre la naturaleza y la tecnología.",
        },
        {
            src: "https://images.unsplash.com/photo-1579541592065-da8a15e49bc7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXJ0ZSUyMHJlbmFjZW50aXN0YSUyMHBpbnR1cmF8ZW58MHwwfDB8fHwy",
            alt: "Obra de arte contemporáneo",
            description: "Esta es una obra de arte contemporáneo que desafía las convenciones tradicionales.",
        },
        {
            src: "https://images.unsplash.com/photo-1579541592065-da8a15e49bc7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXJ0ZSUyMHJlbmFjZW50aXN0YSUyMHBpbnR1cmF8ZW58MHwwfDB8fHwy",
            alt: "Obra de arte contemporáneo",
            description: "Esta es una obra de arte contemporáneo que desafía las convenciones tradicionales.",
        },
        {
            src: "https://images.unsplash.com/photo-1579541592065-da8a15e49bc7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXJ0ZSUyMHJlbmFjZW50aXN0YSUyMHBpbnR1cmF8ZW58MHwwfDB8fHwy",
            alt: "Obra de arte contemporáneo",
            description: "Esta es una obra de arte contemporáneo que desafía las convenciones tradicionales.",
        },
        {
            src: "https://images.unsplash.com/photo-1579541592065-da8a15e49bc7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXJ0ZSUyMHJlbmFjZW50aXN0YSUyMHBpbnR1cmF8ZW58MHwwfDB8fHwy",
            alt: "Obra de arte contemporáneo",
            description: "Esta es una obra de arte contemporáneo que desafía las convenciones tradicionales.",
        },
        {
            src: "https://images.unsplash.com/photo-1579541592065-da8a15e49bc7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXJ0ZSUyMHJlbmFjZW50aXN0YSUyMHBpbnR1cmF8ZW58MHwwfDB8fHwy",
            alt: "Obra de arte contemporáneo",
            description: "Esta es una obra de arte contemporáneo que desafía las convenciones tradicionales.",
        },
        {
            src: "https://images.unsplash.com/photo-1579541592065-da8a15e49bc7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXJ0ZSUyMHJlbmFjZW50aXN0YSUyMHBpbnR1cmF8ZW58MHwwfDB8fHwy",
            alt: "Obra de arte contemporáneo",
            description: "Esta es una obra de arte contemporáneo que desafía las convenciones tradicionales.",
        },
    ];

    const handleImageClick = (image) => {
        setExpandedImage(image);
    };

    const handleCloseExpanded = () => {
        setExpandedImage(null);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Más del artista</h2>
            {/* Primera fila */}
            <div className="flex flex-col md:flex-row gap-4 mb-4">
                <div className="md:w-1/2 flex items-center cursor-pointer" onClick={() => handleImageClick(images[0])}>
                    <Image src={images[0].src} alt={images[0].alt} width={800} height={600} layout="responsive" objectFit="cover" />
                </div>
                <div className="md:w-1/2 flex flex-col gap-4">
                    <div className="cursor-pointer" onClick={() => handleImageClick(images[1])}>
                        <Image src={images[1].src} alt={images[1].alt} width={400} height={300} layout="responsive" objectFit="cover" />
                    </div>
                    <div className="cursor-pointer" onClick={() => handleImageClick(images[2])}>
                        <Image src={images[2].src} alt={images[2].alt} width={400} height={300} layout="responsive" objectFit="cover" />
                    </div>
                </div>
            </div>

            {/* Segunda fila */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="cursor-pointer" onClick={() => handleImageClick(images[3])}>
                    <Image src={images[3].src} alt={images[3].alt} width={600} height={400} layout="responsive" objectFit="cover" />
                </div>
                <div className="cursor-pointer" onClick={() => handleImageClick(images[4])}>
                    <Image src={images[4].src} alt={images[4].alt} width={600} height={400} layout="responsive" objectFit="cover" />
                </div>
            </div>

            {/* Tercera fila */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="cursor-pointer" onClick={() => handleImageClick(images[5])}>
                    <Image src={images[5].src} alt={images[5].alt} width={400} height={300} layout="responsive" objectFit="cover" />
                </div>
                <div className="cursor-pointer" onClick={() => handleImageClick(images[6])}>
                    <Image src={images[6].src} alt={images[6].alt} width={400} height={300} layout="responsive" objectFit="cover" />
                </div>
                <div className="cursor-pointer" onClick={() => handleImageClick(images[7])}>
                    <Image src={images[7].src} alt={images[7].alt} width={400} height={300} layout="responsive" objectFit="cover" />
                </div>
            </div>

            {/* Vista expandida */}
            {expandedImage && (
                <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50" onClick={handleCloseExpanded}>
                    <div className="relative max-w-4xl max-h-full">
                        <Image
                            src={expandedImage.src}
                            alt={expandedImage.alt}
                            width={1100}
                            height={700}
                            layout="responsive"
                            objectFit="contain"
                        />
                        <button className="absolute top-4 right-4 text-white text-2xl" onClick={handleCloseExpanded}>
                            <FaTimes />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ComplexGallery;