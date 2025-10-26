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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'nav-blur-enhanced bg-white/90 dark:bg-black/90 shadow-lg border-b border-gray-200/20 dark:border-gray-800/20' 
        : 'nav-blur bg-white/80 dark:bg-black/80 border-b border-gray-200/10 dark:border-gray-800/10'
    }`}>
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-start">
          {/* Navigation Links - Left Aligned */}
          <ul className="flex gap-4 sm:gap-6 lg:gap-8 overflow-x-auto">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`font-ibm-plex-mono text-xs sm:text-sm uppercase tracking-wider transition-colors duration-200 whitespace-nowrap ${
                    pathname === link.href
                      ? 'font-bold text-light-accent dark:text-dark-accent'
                      : 'font-semibold text-light-text dark:text-dark-text hover:text-light-accent dark:hover:text-dark-accent'
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
