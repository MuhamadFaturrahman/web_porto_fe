import React from 'react'
import NavLinks from './NavLinks';


interface Link {
  path: string;
  title: string;
}

interface LinksProps {
  links: Link[];
  isOpen: boolean;
}

const MenuOverlay: React.FC<LinksProps> = ({ links,isOpen }) => {
  return (
    <div className={`fixed w-full bg-[#033252] transition-transform duration-500 transform ${
      isOpen ? 'opacity-95 translate-y-0 z-10' : 'opacity-0 -translate-y-full z-10'
    } top-[80px] md:top-[100px]`}>
      <ul className={'flex flex-col py-4 items-center'}>
        {links.map((link, index) => (
          <li key={index}>
            <NavLinks href={link.path} title={link.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuOverlay;
