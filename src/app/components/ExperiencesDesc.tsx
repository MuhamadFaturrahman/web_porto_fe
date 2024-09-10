import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import imageFirst from '../assets/01_pic.jpg';

function ExperiencesDesc() {
  // Initialize the screenSize state within the component
  const [screenSize, setScreenSize] = useState(false);

  useEffect(() => {
    // Function to handle the resize event
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setScreenSize(true); // True for large screens (>= 1024px)
      } else {
        setScreenSize(false); // False for small screens (< 1024px)
      }
    };

    // Run the function on component mount to set initial value
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures this runs only once

  if (screenSize) {
    // If screenSize is true (large screens)
    return (
      <>
        {/* Large Screen Experience Section 1 */}
        <div className="lg:flex lg:flex-row place-self-center items-center lg:place-self-start lg:space-x-5 relative">
          <div className="lg:basis-5/12">
            <Image
              src={imageFirst}
              alt="Stock photo of Graphic Designer"
              className="rounded-md"
            />
          </div>
          <div className="lg:basis-7/12">
            <h3 className="text-xl font-bold">Hello</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quae eos quidem asperiores alias amet cupiditate voluptatum, quo molestiae laborum magnam excepturi tenetur fugiat architecto repellendus a dignissimos? Labore, corporis!</p>
          </div>
        </div>
        {/* Large Screen Experience Section 2 */}
        <div className="lg:flex lg:flex-row place-self-center items-center lg:place-self-start lg:space-x-5 relative">
          <div className="lg:basis-7/12">
            <h3 className="text-xl font-bold">Hello</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quae eos quidem asperiores alias amet cupiditate voluptatum, quo molestiae laborum magnam excepturi tenetur fugiat architecto repellendus a dignissimos? Labore, corporis!</p>
          </div>
          <div className="lg:basis-5/12">
            <Image
              src={imageFirst}
              alt="Stock photo of Graphic Designer"
              className="rounded-md"
            />
          </div>
        </div>
        {/* Large Screen Experience Section 3 */}
        <div className="lg:flex lg:flex-row place-self-center items-center lg:place-self-start lg:space-x-5 relative">
          <div className="lg:basis-5/12">
            <Image
              src={imageFirst}
              alt="Stock photo of Graphic Designer"
              className="rounded-md"
            />
          </div>
          <div className="lg:basis-7/12">
            <h3 className="text-xl font-bold">Hello</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quae eos quidem asperiores alias amet cupiditate voluptatum, quo molestiae laborum magnam excepturi tenetur fugiat architecto repellendus a dignissimos? Labore, corporis!</p>
          </div>
        </div>
      </>
    );
  }

  // If screenSize is false (small screens)
  return (
    <>
      {/* Small Screen Experience Section */}
      <div className="flex flex-col items-center space-y-2">
        <Image
          src={imageFirst}
          alt="Stock photo of Graphic Designer"
          className="rounded-md"
        />
        <h3 className="text-xl place-self-start font-bold">Hello</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quae eos quidem asperiores alias amet cupiditate voluptatum, quo molestiae laborum magnam excepturi tenetur fugiat architecto repellendus a dignissimos? Labore, corporis!</p>
      </div>
      {/* Small Screen Experience Section */}
      <div className="flex flex-col items-center space-y-2">
        <Image
          src={imageFirst}
          alt="Stock photo of Graphic Designer"
          className="rounded-md"
        />
        <h3 className="text-xl place-self-start font-bold">Hello</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quae eos quidem asperiores alias amet cupiditate voluptatum, quo molestiae laborum magnam excepturi tenetur fugiat architecto repellendus a dignissimos? Labore, corporis!</p>
      </div>
      {/* Small Screen Experience Section */}
      <div className="flex flex-col items-center space-y-2">
        <Image
          src={imageFirst}
          alt="Stock photo of Graphic Designer"
          className="rounded-md"
        />
        <h3 className="text-xl place-self-start font-bold">Hello</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quae eos quidem asperiores alias amet cupiditate voluptatum, quo molestiae laborum magnam excepturi tenetur fugiat architecto repellendus a dignissimos? Labore, corporis!</p>
      </div>
    </>
  );
}

export default ExperiencesDesc;
