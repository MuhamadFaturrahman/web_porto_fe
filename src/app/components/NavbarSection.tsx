/* eslint-disable react/no-unescaped-entities */
"use client"
import Link from 'next/link'
import React, {useState} from 'react'
import Image from "next/image"
import imgNavbar from '../assets/logo.png';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'; 
import MenuOverlay from './MenuOverlay';
import NavLinks from './NavLinks';


interface NavLink {
    title: string;
    path: string;
  }
  
  const navLinks: NavLink[] = [
    {
      title: 'Experiences',
      path: '#experiences',
    },
    {
      title: 'Skills',
      path: '#skills',
    },
    {
      title: 'Contact',
      path: '#contact',
    },
  ];



function NavbarSection() {
    const [navbarOpen,setNavbarOpen] = useState(false)
  return (
    <nav className='fixed top-0 right-0 left-0 z-10 bg-[#033252] bg-opacity-95 drop-shadow-md'>
        <div className='flex flex-wrap items-center justify-between mx-auto py-4 px-10 lg:px-20'>
            {/* Logo and Title Section */}
            <Link href={"/"} className='flex text-[#FAF8F0] items-center space-x-4 text-xl font-medium lg:px-10'>
            <div className="rounded-full bg-gradient-to-t from-blue-900 to-[#033252] w-[50px] h-[50px] md:w-[75px] md:h-[75px] relative">
                <Image
                src={imgNavbar}
                alt="Logo Just Friday for header"
                className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                />
            </div>
            </Link>
            {/* Navigation Links Section */}
            {/* Small Screen Size*/}
            <div className="mobile-menu block lg:hidden ">
                {
                    !navbarOpen ?(
                        <button onClick={()=>setNavbarOpen(true)} className='flex text-[#FAF8F0] items-center px-3 hover:text-[#18A4E0] hover:ease-in-out duration-300'>
                            <Bars3Icon className='h-8 w-8'/>
                        </button>
                        
                    ):(
                        <button onClick={()=>setNavbarOpen(false)} className='flex text-[#FAF8F0] items-center px-3 hover:text-[#18A4E0] hover:ease-in-out duration-300'>
                            <XMarkIcon className='h-8 w-8'/>
                        </button>
                    )
                }
            </div>
            {/* Large Screen Size*/}
            <div className="menu hidden lg:block lg:w-auto lg:px-20" id='navbar'>
            <ul className='flex p-4 lg:p-0 lg:flex-row space-x-8'>
                {navLinks.map((link, index) => (
                <li key={index}>
                    <NavLinks href={link.path} title={link.title} />
                </li>
                ))}
            </ul>
            </div>
        </div>
        {navbarOpen ? <div className="block lg:hidden">
          <MenuOverlay links={navLinks}  isOpen={navbarOpen} />
        </div>
        :null}
</nav>
  )
}

export default NavbarSection