import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    // Sticky note colors
    'bg-note-orange',
    'bg-note-pink', 
    'bg-note-yellow',
    'bg-note-green',
    'bg-note-blue',
    'bg-note-purple',
    // Line clamp utilities
    'line-clamp-2',
    'line-clamp-3',
    'line-clamp-4',
  ],
  theme: {
    extend: {
      colors: {
        // Dark theme colors
        'dark-bg': '#0F0F0F',
        'dark-surface': '#1A1A1A',
        'dark-text': '#FFFFFF',
        'dark-text-secondary': '#A1A1AA',
        'dark-accent': '#3B82F6',
        
        // Sticky note colors
        'note-orange': '#FED7AA',
        'note-pink': '#FECACA',
        'note-yellow': '#FEF08A',
        'note-green': '#BBF7D0',
        'note-blue': '#BFDBFE',
        'note-purple': '#E9D5FF',
        
        // Highlight colors
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
        inter: ['var(--font-inter)', 'sans-serif'],
        'jetbrains-mono': ['var(--font-jetbrains-mono)', 'monospace'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

export default config;
