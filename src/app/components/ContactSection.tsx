/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import LinkedInIcon from '../assets/icons/linkedin.svg'
import WhatsappIcon from '../assets/icons/whatsapp.svg'
import InstagramIcon from '../assets/icons/instagram.svg'
import FiverrIcon from '../assets/icons/fiverr.svg'
import YoutubeIcon from '../assets/icons/youtube.svg'


function ContactSection() {
  return (
    <section id='contact'>
        <div className='bg-neutral-900 py-5 lg:px-10'>
            <div className="flex flex-col px-10 lg:px-20 py-5 justify-center items-center gap-5 lg:gap-10">
                <h2 className='font-bold text-center text-lg text-[#FAF8F0]'>Get in Touch – Let's Make It Happen!</h2>
                <div className='flex flex-wrap gap-10 justify-center'>
                    <Link
                    href="https://www.linkedin.com/in/muhamad-faturrahman/"
                    target="_blank" 
                    rel="noopener noreferrer">
                        <div className='rounded-full p-0.5 border-2 lg:p-3 lg:border-4 border-[#FAF8F0] hover:bg-[#033252] hover:ease-in-out duration-300'>
                            <Image
                            src={LinkedInIcon}
                            alt='LinkedIn Icon'
                            className='w-9 h-9 lg:w-12 lg:h-12'
                            />
                        </div>
                    </Link>
                    <Link
                    href="https://wa.me/6285174104032"
                    target="_blank" 
                    rel="noopener noreferrer">
                        <div className='rounded-full p-1.5 border-2 lg:p-4 lg:border-4 border-[#FAF8F0] hover:bg-[#033252] hover:ease-in-out duration-300'>
                            <Image
                            src={WhatsappIcon}
                            alt='WhatsApp Icon'
                            className='w-6 h-6 lg:w-10 lg:h-10'
                            />
                        </div>
                    </Link>
                    <Link
                    href="https://www.instagram.com/muhamad_faturrahman/"
                    target="_blank" 
                    rel="noopener noreferrer">
                        <div className='rounded-full p-1 border-2 lg:p-4 lg:border-4 border-[#FAF8F0] hover:bg-[#033252] hover:ease-in-out duration-300'>
                            <Image
                            src={InstagramIcon}
                            alt='Instagram Icon'
                            className='w-7 h-7 lg:w-10 lg:h-10'
                            />
                        </div>
                    </Link>
                    <Link
                    href="https://www.youtube.com/@JustFriday04"
                    target="_blank" 
                    rel="noopener noreferrer">
                        <div className='rounded-full p-1 border-2 lg:p-4 lg:border-4 border-[#FAF8F0] hover:bg-[#033252] hover:ease-in-out duration-300'>
                            <Image
                            src={YoutubeIcon}
                            alt='Youtube Icon'
                            className='w-7 h-7 lg:w-10 lg:h-10'
                            />
                        </div>
                    </Link>
                    <Link
                    href="https://www.fiverr.com/just_friday"
                    target="_blank" 
                    rel="noopener noreferrer">
                        <div className='rounded-full p-1 border-2 lg:p-4 lg:border-4 border-[#FAF8F0] hover:bg-[#033252] hover:ease-in-out duration-300'>
                            <Image
                            src={FiverrIcon}
                            alt='WhatsApp Icon'
                            className='w-7 h-7 lg:w-10 lg:h-10'
                            />
                        </div>
                    </Link>
                </div>
                <p className='sm:text-base text-sm lg:text-center text-justify text-[#FAF8F0]'>Whether you're interested in collaborating on a project, discussing ideas, or just want to connect, I'd love to hear from you! You can reach me through any of the platforms above. Simply click on the icons and get in touch with me. Let's make something amazing happen together!</p>
            </div>
        </div>
    </section>
  )
}

export default ContactSection