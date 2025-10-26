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
    <nav className={`fixed top-0 left-4 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'backdrop-blur-lg bg-white/90 dark:bg-dark-bg shadow-lg' 
        : 'backdrop-blur-md bg-white/80 dark:bg-dark-bg'
    }`}>
      <div className="px-6 py-4">
        <div className="flex items-center justify-start">
          {/* Navigation Links - Left Aligned */}
          <ul className="flex gap-6">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`font-ibm-plex-mono text-sm uppercase tracking-wider transition-colors duration-200 ${
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
