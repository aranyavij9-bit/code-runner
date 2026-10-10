/** @type {import('tailwindcss').Config} */
// Palette follows aranyavij.com: soft blue and pink on cream, navy text.
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FBF8F5',
        line: '#E7E4EA',
        navy: '#1F2850',
        body: '#30395E',
        muted: '#7A82A6',
        brand: {
          DEFAULT: '#4F8CF7',
          hover: '#3A72DE',
          tint: '#EEF5FF',
        },
        blush: {
          DEFAULT: '#F2709F',
          tint: '#FFE3EC',
        },
        success: {
          DEFAULT: '#28A27D',
          tint: '#E6F6F0',
        },
        warning: {
          DEFAULT: '#F6A35C',
          dark: '#C96F28',
          tint: '#FFF3E6',
        },
        danger: {
          DEFAULT: '#E8507A',
          tint: '#FFEEF3',
        },
      },
      fontFamily: {
        sans: ['Nunito', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'serif'],
      },
      boxShadow: {
        soft: '0 1px 2px rgba(31, 40, 80, 0.04), 0 10px 28px -14px rgba(31, 40, 80, 0.12)',
        lift: '0 2px 4px rgba(31, 40, 80, 0.05), 0 16px 36px -16px rgba(31, 40, 80, 0.2)',
      },
      animation: {
        'fade-in': 'fadeIn 0.25s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
