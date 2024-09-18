/* eslint-disable react/no-unescaped-entities */
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
            <h3 className="text-xl font-bold">From Passion to Profession: My Graphic Design Evolution</h3>
            <p>My journey into graphic design began in high school, where I became captivated by vector art and the creative potential it offered. Driven by this passion, I launched a small business, diving headfirst into the world of technology and side hustles. Collaborating with school and campus organizations, I crafted compelling social media graphics—infographics, posts, and stories—that made an impact. This early foray into design not only honed my skills but also laid the groundwork for my future career, blending creativity with entrepreneurial spirit.</p>
          </div>
        </div>
        {/* Large Screen Experience Section 2 */}
        <div className="lg:flex lg:flex-row place-self-center items-center lg:place-self-start lg:space-x-5 relative">
          <div className="lg:basis-7/12">
            <h3 className="text-xl font-bold">Innovative Front-End Development: Bridging Theory and Practice</h3>
            <p>College marked a pivotal chapter as I embarked on an internship that immersed me in the dynamic world of front-end web development. Working with Next.js and React, I navigated the complexities of modern web technologies while adapting to a professional environment. The experience was both challenging and rewarding, as I tackled the intricacies of new knowledge and cultural shifts with the support of a dedicated team and mentor. Alongside mastering an array of technologies—HTML, CSS, PHP, Dart, Python, C, C++, React JS, Flutter, JavaScript, and Java—I also embraced leadership as a Lab Instructor (PIC) and Lecturer Assistant. This role sharpened my ability to lead, organize, and inspire, further shaping my professional trajectory.</p>
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
            <h3 className="text-xl font-bold">Designing Impact: My Journey into UI/UX Excellence</h3>
            <p>As I approached the final stages of my academic journey, my focus shifted to UI/UX Design with a commitment to improving usability. My thesis project, centered around the ITG Virtual Tour Web Prototype, allowed me to apply The Five Planes Method to real-world challenges. This project was a transformative experience, showcasing my ability to blend graphic design principles with advanced UI/UX methodologies. By prioritizing user-centered design, I aimed to create interfaces that were not only functional but also engaging and intuitive. As I reached the end of this chapter, I graduated from the Garut Institute of Technology with a Bachelor's Degree in Informatics Engineering, achieving Cum Laude honors with a GPA of 3.86—marking the end of the beginning of my professional journey.</p>
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
        <h3 className="text-xl font-bold">From Passion to Profession: My Graphic Design Evolution</h3>
        <p>My journey into graphic design began in high school, where I became captivated by vector art and the creative potential it offered. Driven by this passion, I launched a small business, diving headfirst into the world of technology and side hustles. Collaborating with school and campus organizations, I crafted compelling social media graphics—infographics, posts, and stories—that made an impact. This early foray into design not only honed my skills but also laid the groundwork for my future career, blending creativity with entrepreneurial spirit.</p>
      </div>
      {/* Small Screen Experience Section */}
      <div className="flex flex-col items-center space-y-2">
        <Image
          src={imageFirst}
          alt="Stock photo of Graphic Designer"
          className="rounded-md"
        />
        <h3 className="text-xl font-bold">Innovative Front-End Development: Bridging Theory and Practice</h3>
        <p>College marked a pivotal chapter as I embarked on an internship that immersed me in the dynamic world of front-end web development. Working with Next.js and React, I navigated the complexities of modern web technologies while adapting to a professional environment. The experience was both challenging and rewarding, as I tackled the intricacies of new knowledge and cultural shifts with the support of a dedicated team and mentor. Alongside mastering an array of technologies—HTML, CSS, PHP, Dart, Python, C, C++, React JS, Flutter, JavaScript, and Java—I also embraced leadership as a Lab Instructor (PIC) and Lecturer Assistant. This role sharpened my ability to lead, organize, and inspire, further shaping my professional trajectory.</p>
      </div>
      {/* Small Screen Experience Section */}
      <div className="flex flex-col items-center space-y-2">
        <Image
          src={imageFirst}
          alt="Stock photo of Graphic Designer"
          className="rounded-md"
        />
        <h3 className="text-xl font-bold">Designing Impact: My Journey into UI/UX Excellence</h3>
        <p>As I approached the final stages of my academic journey, my focus shifted to UI/UX Design with a commitment to improving usability. My thesis project, centered around the ITG Virtual Tour Web Prototype, allowed me to apply The Five Planes Method to real-world challenges. This project was a transformative experience, showcasing my ability to blend graphic design principles with advanced UI/UX methodologies. By prioritizing user-centered design, I aimed to create interfaces that were not only functional but also engaging and intuitive. As I reached the end of this chapter, I graduated from the Garut Institute of Technology with a Bachelor's Degree in Informatics Engineering, achieving Cum Laude honors with a GPA of 3.86—marking the end of the beginning of my professional journey.</p>
      </div>
    </>
  );
}

export default ExperiencesDesc;
