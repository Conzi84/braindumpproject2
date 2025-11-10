import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-ibm-plex-mono",
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-ibm-plex-sans",
});

export const metadata: Metadata = {
  title: "Brain Dump Project",
  description: "Documenting my AI journey and how AI tools shape my life and work",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
        return (
          <html lang="en" className={`${ibmPlexMono.variable} ${ibmPlexSans.variable}`}>
            <body className="bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text font-ibm-plex-mono">
              <ThemeToggle />
              <Navigation />
              <main className="min-h-screen pt-16 sm:pt-20">{children}</main>
              <Footer />
            </body>
          </html>
        );
}
