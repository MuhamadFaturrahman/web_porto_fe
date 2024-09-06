import React from 'react'
import NavLinks from './Navlinks';

interface Link {
  path: string;
  title: string;
}

interface LinksProps {
  links: Link[];
}

const MenuOverlay: React.FC<LinksProps> = ({ links }) => {
  return (
    <ul className='flex flex-col py-4 items-center'>
      {links.map((link, index) => (
        <li key={index}>
          <NavLinks href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
