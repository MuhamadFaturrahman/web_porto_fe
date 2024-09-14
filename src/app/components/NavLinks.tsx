import Link from "next/link";
import React from 'react';

interface NavLinkProps {
  href: string;
  title: string;
}

const NavLinks: React.FC<NavLinkProps> = ({ href, title }) => {
  const handleScroll = (e: React.MouseEvent, id: string) => {
    e.preventDefault(); // Prevent the default anchor behavior
    const element = document.getElementById(id.slice(1)); // Remove the '#' to get the id
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <Link href={href} scroll={false} onClick={(e) => handleScroll(e, href)} 
      className="block py-2 pl-3 pr-4 text-[#FAF8F0] text-thin font-thin sm:text-xl sm:font-extralight rounded lg:p-0 hover:text-[#18A4E0] hover:ease-in-out duration-300">
      {title}
    </Link>
  );
};

export default NavLinks;
