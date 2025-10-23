// components/Navigation.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'HOME' },
    { href: '/about', label: 'ABOUT' },
    { href: '/blog', label: 'BLOG' },
    { href: '/garden', label: 'GARDEN' },
    { href: '/resources', label: 'RESOURCES' },
    { href: '/work', label: 'WORK' },
  ];

        return (
          <nav className="border-b border-dark-surface dark:border-light-surface bg-dark-bg dark:bg-light-bg">
            <div className="max-w-6xl mx-auto px-6 py-6">
              <div className="flex items-center justify-start">
                {/* Navigation Links - Left Aligned */}
                <ul className="flex gap-8">
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={`font-ibm-plex-mono font-semibold transition-colors ${
                          pathname === link.href
                            ? 'text-dark-accent dark:text-light-accent'
                            : 'text-dark-text dark:text-light-text hover:text-dark-accent dark:hover:text-light-accent'
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
