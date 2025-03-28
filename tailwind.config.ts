import {nextui} from '@nextui-org/theme';
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/[object Object].js"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f1fe',
          100: '#cce3fd',
          200: '#99c7fb',
          300: '#66aaf9',
          400: '#338ef7',
          500: '#0072f5',
          600: '#005bc4',
          700: '#004493',
          800: '#002e62',
          900: '#001731',
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        move: {
          '0%, 100%': { transform: 'translate(-50%, -50%) translateX(-50px) translateY(-30px) scale(1)' },
          '25%': { transform: 'translate(-50%, -50%) translateX(30px) translateY(-30px) scale(1.2)' },
          '50%': { transform: 'translate(-50%, -50%) translateX(-50px) translateY(30px) scale(0.9)' },
          '75%': { transform: 'translate(-50%, -50%) translateX(50px) translateY(30px) scale(1.1)' },
        },
        'move-slower': {
          '0%, 100%': { transform: 'translate(-50%, -50%) translateX(-20px) translateY(-30px) scale(1)' },
          '25%': { transform: 'translate(-50%, -50%) translateX(20px) translateY(-40px) scale(1.1)' },
          '50%': { transform: 'translate(-50%, -50%) translateX(-60px) translateY(20px) scale(0.9)' },
          '75%': { transform: 'translate(-50%, -50%) translateX(40px) translateY(40px) scale(1.05)' },
        },
        slide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-100% / 2))' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        move: 'move 8s ease-in-out infinite',
        'move-slower': 'move-slower 10s ease-in-out infinite',
        'slide-infinite': 'slide 25s linear infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
      },
    },
  },
  plugins: [nextui()],
};

export default config;