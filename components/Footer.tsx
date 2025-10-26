// components/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-light-text-secondary dark:border-dark-text-secondary bg-light-surface dark:bg-dark-surface mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold font-ibm-plex-mono text-light-text dark:text-dark-text mb-4">
              Brain Dump
            </h3>
            <p className="text-light-text-secondary dark:text-dark-text-secondary font-ibm-plex-sans font-light">
              Thoughts, ideas, and learnings from the journey.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-ibm-plex-mono font-semibold text-light-text dark:text-dark-text mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-light-text-secondary dark:text-dark-text-secondary hover:text-dark-accent dark:hover:text-light-accent transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/garden" className="text-light-text-secondary dark:text-dark-text-secondary hover:text-dark-accent dark:hover:text-light-accent transition-colors">
                  Digital Garden
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-light-text-secondary dark:text-dark-text-secondary hover:text-dark-accent dark:hover:text-light-accent transition-colors">
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-ibm-plex-mono font-semibold text-light-text dark:text-dark-text mb-4">
              Connect
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-light-text-secondary dark:text-dark-text-secondary hover:text-dark-accent dark:hover:text-light-accent transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-light-text-secondary dark:text-dark-text-secondary hover:text-dark-accent dark:hover:text-light-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-light-text-secondary dark:border-dark-text-secondary text-center">
          <p className="text-light-text-secondary dark:text-dark-text-secondary font-ibm-plex-sans font-light text-sm">
            © {currentYear} Brain Dump. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
