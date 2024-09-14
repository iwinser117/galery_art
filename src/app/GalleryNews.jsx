"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FaExpand, FaTimes } from "react-icons/fa";

const GalleryNews = () => {
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
  ];

  const [expandedImage, setExpandedImage] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleImageClick = (image) => {
    setExpandedImage(image);
  };

  const handleCloseExpanded = () => {
    setExpandedImage(null);
  };

  return (
    <>
      <section ref={sectionRef} className="container mx-auto px-4 py-12 opacity-0 transition-opacity duration-1000 h-full">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Nuevas obras</h2>
        <div className="space-y-12">
          {images.map((image, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""} items-center gap-8 animate-slide-in opacity-0`}
            >
              <div className="relative group overflow-hidden rounded-lg shadow-lg w-full lg:w-1/2 h-full cursor-pointer" onClick={() => handleImageClick(image)}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={1100}
                  height={700}
                  layout="responsive"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <FaExpand className="text-white text-5xl transform scale-0 group-hover:scale-100 transition-transform duration-300" />
                </div>
              </div>
              <div className="lg:w-1/2">
                <h3 className="text-2xl font-semibold mb-4">{image.alt}</h3>
                <p className="text-lg ">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

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
    </>
  );
};

export default GalleryNews;