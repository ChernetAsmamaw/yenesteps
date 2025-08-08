import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
  // YeneSteps brand colors - minimalist green/white theme
  // Primary brand green per spec: #28a745
  ygreen: '#28a745',
  // Dark neutral for text
  ydark: '#0f172a',
  ylight: '#ffffff',
  ysuccess: '#28a745',
  yaccent: '#28a745',
        ywarning: '#eab308',    // Warning yellow
        yneutral: {
          50: '#f9fafb',
          100: '#f3f4f6', 
          600: '#4b5563',
          900: '#111827',
        }
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'sans-serif',
        ],
      },
      fontWeight: {
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
      },
      maxWidth: {
        container: '1440px',
      },
      spacing: {
        section: '120px',
        container: '20px',
      },
      transitionDuration: {
        fast: '200ms',
        normal: '300ms',
        slow: '500ms',
      },
      transitionTimingFunction: {
        'ease-standard': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
