import React, { useEffect, useState } from 'react';
import StockPic1 from '../assets/01_pic.jpg';
import StockPic2 from '../assets/02_pic.jpg';
import FrontEndImg1 from '../assets/img_fe_01.jpg'
import FrontEndImg2 from '../assets/img_fe_02.jpg'
import FrontEndImg3 from '../assets/img_fe_03.jpg'
import UIUXImg1 from '../assets/img_uiux_01.png'
import UIUXImg2 from '../assets/img_uiux_02.jpg'
import GraphicDesignImg1 from '../assets/img_dg_01.png'
import GraphicDesignImg2 from '../assets/img_dg_02.png'
import GraphicDesignImg3 from '../assets/img_dg_03.png'
import CertITS from '../assets/cert_its.png'
import CertBNSP from '../assets/cert_bnsp.png'
import CertPTESOL from '../assets/cert_ptesol.png'
import CertOther01 from '../assets/cert_skillacademy.png'
import CertOther02 from '../assets/cert_hology.png'
import CertOther03 from '../assets/cert_vsga.png'
import CertOther04 from '../assets/cert_biofarmaintern.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper/modules";
import 'swiper/scss';
import 'swiper/scss/pagination';
import Image from 'next/image';
import { XMarkIcon } from '@heroicons/react/24/outline';

const PICTURES_DATA = [
    {
        id: "pic_1",
        title: "Stock Photo",
        image: [StockPic1, StockPic2, StockPic1],
    },
    {
        id: "graphicDesign",
        title: "Stock Photo 2",
        image: [CertOther03, GraphicDesignImg1, GraphicDesignImg2, GraphicDesignImg3],
    },
    {
      id: "frontEnd",
      title: "Stock Photo 2",
      image: [CertOther04,FrontEndImg1, FrontEndImg2,FrontEndImg3],
    },
    {
      id: "uiux",
      title: "Stock Photo 2",
      image: [UIUXImg1, UIUXImg2],
    },
    {
      id: "cert_1",
      title: "Stock Photo 2",
      image: [CertITS],
    },
    {
      id: "cert_2",
      title: "Stock Photo 2",
      image: [CertBNSP],
    },
    {
      id: "cert_3",
      title: "Stock Photo 2",
      image: [CertPTESOL],
    },
    {
      id: "cert_others",
      title: "Stock Photo 2",
      image: [CertOther01, CertOther02, CertOther03, CertOther04],
    },
];

interface ModalProps {
    idProps: string | null;
    onClose: () => void; // Function to handle close button
}

const ModalComp: React.FC<ModalProps> = ({ idProps, onClose }) => {

  const selectedPicture = PICTURES_DATA.find(picture => picture.id === idProps);
  const [loadingImages, setLoadingImages] = useState<boolean[]>([]);

  useEffect(() => {
    if (selectedPicture) {
      // Initialize loading state for all images
      setLoadingImages(new Array(selectedPicture.image.length).fill(true));
    }

    // Disable scroll on body when modal is open
    document.body.style.overflow = 'hidden';

    // Cleanup when modal is closed
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedPicture]);

  const handleImageLoad = (index: number) => {
    setLoadingImages(prevState => {
      const newLoadingState = [...prevState];
      newLoadingState[index] = false;
      return newLoadingState;
    });
  };

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
                <div className="relative w-full h-[600px] md:h-[550px] sm:h-[400px] overflow-hidden mb-10">
                {loadingImages[index] && (
                    <div className="absolute inset-0 flex justify-center items-center bg-gray-100">
                      <div className="loader"></div> {/* Replace with your spinner component */}
                    </div>
                  )}
                  <Image
                    src={img}
                    alt="Experiences Documentation"
                    className="object-contain w-full h-full"
                    layout="fill"
                    priority
                    onLoadingComplete={() => handleImageLoad(index)}
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
