import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  safelist: [
    // Sticky note colors
    'bg-note-orange',
    'bg-note-pink', 
    'bg-note-yellow',
    'bg-note-green',
    'bg-note-blue',
    'bg-note-purple',
    // Dark mode sticky note colors
    'bg-note-orange-dark',
    'bg-note-pink-dark',
    'bg-note-yellow-dark',
    'bg-note-green-dark',
    'bg-note-blue-dark',
    'bg-note-purple-dark',
    // Line clamp utilities
    'line-clamp-2',
    'line-clamp-3',
    'line-clamp-4',
    // Height utilities for thumbnails
    'h-64',
    'text-4xl',
  ],
  theme: {
    extend: {
      colors: {
        // Dark theme colors (high contrast)
        'dark-bg': '#0F0F0F',
        'dark-surface': '#1A1A1A',
        'dark-text': '#FFFFFF',
        'dark-text-secondary': '#D1D5DB',
        'dark-accent': '#3B82F6',

        // Light theme colors (high contrast)
        'light-bg': '#FFFFFF',
        'light-surface': '#F8F9FA',
        'light-text': '#1A1A1A',
        'light-text-secondary': '#6B7280',
        'light-accent': '#2563EB',
        
        // Sticky note colors (work in both themes)
        'note-orange': '#FED7AA',
        'note-pink': '#FECACA',
        'note-yellow': '#FEF08A',
        'note-green': '#BBF7D0',
        'note-blue': '#BFDBFE',
        'note-purple': '#E9D5FF',
        
        // Dark mode note colors (darker versions)
        'note-orange-dark': '#D97706',
        'note-pink-dark': '#DB2777',
        'note-yellow-dark': '#D97706',
        'note-green-dark': '#059669',
        'note-blue-dark': '#2563EB',
        'note-purple-dark': '#7C3AED',
        
        // Highlight colors (high contrast)
        'highlight-red': '#EF4444',
        'highlight-green': '#10B981',
        'highlight-yellow': '#F59E0B',
        
        // Legacy colors (keeping for compatibility)
        'brain-dump-gray': '#A1A1AA',
        'stark-black': '#0F0F0F',
        'concrete-white': '#1A1A1A',
        'muted-rust': '#3B82F6',
        'deep-slate': '#A1A1AA',
      },
      fontFamily: {
        'ibm-plex-mono': ['var(--font-ibm-plex-mono)', 'monospace'],
        'ibm-plex-sans': ['var(--font-ibm-plex-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

export default config;
