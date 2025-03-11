'use client';

import Link from "next/link";
import style from './ActiveLink.module.css';
import { usePathname } from "next/navigation";

interface ActiveLinkProps {
  url: string;
  label: string;
}

export const ActiveLink = ({url, label}: ActiveLinkProps) => {
  const pathName = usePathname();
  const isActive = pathName === url;
  
  return (
    <Link  
        href={ url } 
        className={ ` ${ style.link } ${ (isActive) && style['link-active'] } ` }>
        { label }
    </Link>
  )
}
