'use client';
import React from 'react';
import { UserProfile } from './UserProfile';
import { Logo } from './Logo';
import { NavLinks } from './NavLinks';
import { useScroll } from '../hooks/useScroll';

export default function Header() {
  const isScrolled = useScroll();

  return (
    <header
      className={`
        ${isScrolled && 'bg-black'}
        pg:py-6 fixed top-0 z-50 flex w-full items-center justify-between px-4 py-4 transition-all lg:px-10`}
    >
      <div className='flex items-center space-x-2 md:space-x-8'>
        <Logo />
        <NavLinks />
      </div>
      <UserProfile />
    </header>
  );
}