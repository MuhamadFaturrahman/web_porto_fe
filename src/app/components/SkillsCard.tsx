import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface CardDetails {
  id: string;
  title: string;
  image: StaticImageData; // Use StaticImageData for imported images in Next.js
  description: string;
}

const SkillsCard: React.FC<CardDetails> = ({ id, title, image, description }) => {
  return (
    
      <div key={id} className="flex flex-col bg-white group relative bg-opacity-15 rounded-lg shadow-lg p-5 mb-10 mx-1 items-start text-start lg:max-w-sm lg:min-h-full overflow-hidden cursor-pointer">
        <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-20" />
        {/* Image Container */}
        <div className="w-full h-full mb-4 rounded-sm flex justify-center items-center">
          <Image
            src={image}
            alt={title}
            className="object-cover w-full h-full"
            priority
          />
        </div>
        {/* Card Content */}
        <h3 className="text-md font-semibold mb-2">{title}</h3>
        <p className="text-sm text-justify">{description}</p>
      </div>

  );
};

export default SkillsCard;
