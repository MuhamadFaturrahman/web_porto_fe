/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import LinkedInIcon from '../assets/icons/linkedin.svg'
import WhatsappIcon from '../assets/icons/whatsapp.svg'
import InstagramIcon from '../assets/icons/instagram.svg'
import FiverrIcon from '../assets/icons/fiverr.svg'


function ContactSection() {
  return (
    <section id='contact'>
        <div className='bg-neutral-900 py-5'>
            <div className="flex flex-col px-20 justify-center items-center gap-5">
                <h2 className='font-bold text-center text-lg text-[#FAF8F0]'>Let's Connect</h2>
                <p className='text-center text-[#FAF8F0]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa odit rerum voluptates obcaecati exercitationem mollitia, debitis numquam qui quam sunt, enim excepturi itaque impedit ipsam expedita dolores! Earum, sapiente illum.</p>
                <div className='flex flex-row gap-12'>
                    <Link href="">
                        <Image 
                        src={LinkedInIcon} 
                        alt='LinkedIn Icon'
                        className='w-10 h-10'
                        />
                    </Link>
                    <Link href="">
                        <Image 
                        src={WhatsappIcon} 
                        alt='WhatsApp Icon'
                        className='w-10 h-10'
                        />
                    </Link>
                    <Link href="">
                        <Image 
                        src={InstagramIcon} 
                        alt='WhatsApp Icon'
                        className='w-10 h-10'
                        />
                    </Link>
                    <Link href="">
                        <Image 
                        src={FiverrIcon} 
                        alt='WhatsApp Icon'
                        className='w-10 h-10'
                        />
                    </Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ContactSection