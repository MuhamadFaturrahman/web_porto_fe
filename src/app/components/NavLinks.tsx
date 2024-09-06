import Link from "next/link";

interface NavLinkProps {
  href: string;
  title: string;
}

const NavLinks: React.FC<NavLinkProps> = ({ href, title }) => {
  return (
    <Link href={href} className='block py-2 pl-3 pr-4 text-[#FAF8F0] sm:text-xl rounded md:p-0 hover:text-[#18A4E0]'>
      {title}
    </Link>
  );
};

export default NavLinks;