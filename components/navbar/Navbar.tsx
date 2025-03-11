import { HomeIcon } from '@primer/octicons-react';
import Link from 'next/link';
import { ActiveLink } from '../active-link/ActiveLink';

const navItems = [
  { url: '/about', label: 'About' },
  { url: '/contact', label: 'Contact' },
  { url: '/pricing', label: 'Pricing' }
];

export const Navbar = () => {
  return (
    <nav className='flex bg-blue-800 p-3 m-3 rounded bg-opactiy-30'>
      <Link href={'/'} className='flex items-center'>
        <HomeIcon className="mr-2" />
        <span>Home</span>
      </Link>

      <div className="flex flex-1"></div>

        {
          navItems.map((item, index) => (
            <ActiveLink key={index} {...item} />
          ))
        }
      
    </nav>
  )
}