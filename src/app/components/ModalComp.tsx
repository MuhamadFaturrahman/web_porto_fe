import React, { useEffect } from 'react';
import StockPic1 from '../assets/01_pic.jpg';
import StockPic2 from '../assets/02_pic.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper/modules";
import 'swiper/scss';
import 'swiper/scss/pagination';
import Image from 'next/image';
import { XMarkIcon } from '@heroicons/react/24/outline'; // Close icon

const PICTURES_DATA = [
    {
        id: "pic_1",
        title: "Stock Photo 1",
        image: [StockPic1, StockPic2, StockPic1], // List of image imports
    },
    {
        id: "pic_2",
        title: "Stock Photo 2",
        image: [StockPic1, StockPic1, StockPic1],
    },
];

interface ModalProps {
    idProps: string;
    onClose: () => void; // Function to handle close button
}

const ModalComp: React.FC<ModalProps> = ({ idProps, onClose }) => {

  const selectedPicture = PICTURES_DATA.find(picture => picture.id === idProps);

  useEffect(() => {
    // Disable scroll by setting body overflow to hidden
    document.body.style.overflow = 'hidden';

    // Clean up the effect by restoring scroll when modal is closed
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  if (!selectedPicture) {
    return <div>No picture found for this ID</div>;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
      {/* Modal Container */}
      <div className="relative w-[90%] max-w-5xl px-6 pb-3 pt-12 bg-[#FAF8F0] rounded-lg shadow-lg">
        {/* Modal Content */}
        <Swiper
          pagination={{ clickable: true }}
          modules={[Pagination]}
        >
          {selectedPicture.image.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center items-center">
                {/* Ensure container has overflow-hidden and rounded-md */}
                <div className="relative w-full h-[600px] md:h-[550px] sm:h-[400px] overflow-hidden mb-10">
                  <Image
                    src={img}
                    alt="Experiences Documentation"
                    className="object-contain w-full h-full"
                    layout="fill"
                    priority
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Close Button */}
        <button 
          onClick={onClose} 
          className="absolute z-60 -top-6 -right-5 p-3 rounded-full shadow-lg text-[#FAF8F0] hover:text-[#18A4E0] bg-[#054d7d] hover:bg-[#FAF8F0] transition">
          <XMarkIcon className="w-7 h-7 text-inherit" />
        </button>
      </div>
    </div>
  );
};

export default ModalComp;
