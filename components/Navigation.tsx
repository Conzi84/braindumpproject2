// components/Navigation.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  const links = [
    { href: '/', label: 'HOME' },
    { href: '/about', label: 'ABOUT' },
    { href: '/blog', label: 'BLOG' },
    { href: '/garden', label: 'GARDEN' },
    { href: '/resources', label: 'RESOURCES' },
    { href: '/work', label: 'WORK' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-2 sm:top-4 left-2 sm:left-4 z-50 transition-all duration-300 max-w-[calc(100vw-1rem)] sm:max-w-none ${
      isScrolled 
        ? 'backdrop-blur-lg bg-white/30 dark:bg-black/70 border border-white/30 dark:border-gray-700/50 shadow-lg' 
        : 'backdrop-blur-md bg-white/20 dark:bg-black/60 border border-white/20 dark:border-gray-700/40 shadow-md'
    }`}>
      <div className="px-2 sm:px-4 py-2 sm:py-3 rounded-xl">
        <div className="flex items-center justify-start">
          <ul className="flex gap-0.5 sm:gap-1 flex-wrap">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`px-2 sm:px-3 py-1 sm:py-2 rounded-lg font-ibm-plex-mono text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 ${
                    pathname === link.href
                      ? 'font-bold text-light-accent dark:text-dark-accent bg-white/10 dark:bg-white/5'
                      : 'font-semibold text-light-text dark:text-dark-text hover:text-light-accent dark:hover:text-dark-accent hover:bg-white/5 dark:hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
