import React from 'react';
import Image from 'next/image';

const ShowcaseImage = ({ src, alt, width = 300, height = 200 }) => {
  return (
    <div className="group relative w-full h-64 mb-4 overflow-hidden rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105">
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit="cover"
        className="transition-opacity duration-300 group-hover:opacity-90"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 transition-all duration-300 group-hover:bg-opacity-30">
        <p className="text-white text-lg font-semibold opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {alt}
        </p>
      </div>
    </div>
  );
};

export default ShowcaseImage;