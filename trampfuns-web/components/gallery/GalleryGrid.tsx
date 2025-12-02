'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

export interface GalleryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  category?: string;
}

export interface GalleryGridProps {
  images: GalleryImage[];
}

export const GalleryGrid: React.FC<GalleryGridProps> = ({ images }) => {
  const [photoIndex, setPhotoIndex] = useState(-1);

  const slides = images.map(img => ({
    src: img.src,
    alt: img.alt,
    width: img.width,
    height: img.height,
  }));

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group"
            onClick={() => setPhotoIndex(index)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
              <svg className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
              </svg>
            </div>
          </div>
        ))}
      </div>

      <Lightbox
        open={photoIndex >= 0}
        close={() => setPhotoIndex(-1)}
        index={photoIndex}
        slides={slides}
      />
    </>
  );
};
