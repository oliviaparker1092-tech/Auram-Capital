/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Meme Terminal (Degen) Colors
        degen: {
          primary: '#8B5CF6',  // Neon Violet
          accent1: '#10B981',  // Neon Green
          accent2: '#06B6D4',  // Cyan
          background: '#09090B', // Jet Black
          surface: '#111111',
          border: '#27272A',
          text: '#FAFAFA',
        },
        // Venture Vault (VC) Colors
        vault: {
          primary: '#0F172A',  // Deep Slate
          accent: '#059669',   // Emerald Green
          platinum: '#E5E7EB', // Platinum
          background: '#F8FAFC', // Off-White (light)
          surface: '#FFFFFF',
          dark: '#111827',     // Off-Black (dark)
          border: '#E5E7EB',
          text: '#1F2937',
        },
      },
      fontFamily: {
        degen: ['Space Grotesk', 'system-ui', 'sans-serif'],
        vault: ['Inter', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      fontSize: {
        xs: ['0.75rem', '1rem'],
        sm: ['0.875rem', '1.25rem'],
        base: ['1rem', '1.5rem'],
        lg: ['1.125rem', '1.75rem'],
        xl: ['1.25rem', '1.75rem'],
        '2xl': ['1.5rem', '2rem'],
        '3xl': ['1.875rem', '2.25rem'],
        '4xl': ['2.25rem', '2.5rem'],
      },
      animation: {
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        bounce: 'bounce 1s infinite',
        shimmer: 'shimmer 2s infinite',
        glow: 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(139, 92, 246, 0.5)' },
          '50%': { boxShadow: '0 0 20px rgba(139, 92, 246, 0.8)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
