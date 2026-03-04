import { addDynamicIconSelectors } from '@iconify/tailwind';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"Space Mono"', 'monospace'],
        serif: ['"Roboto Slab"', 'serif'],
      },
    },
  },
  plugins: [
    require('daisyui'),
    addDynamicIconSelectors(),
  ],
  daisyui: {
    themes: [
      {
        'lobsterglass-light': {
          'primary': '#e63946',
          'primary-content': '#ffffff',
          'secondary': '#457b9d',
          'secondary-content': '#ffffff',
          'accent': '#f4a261',
          'accent-content': '#1d3557',
          'neutral': '#1d3557',
          'neutral-content': '#f1faee',
          'base-100': '#f8f9fa',
          'base-200': '#e9ecef',
          'base-300': '#dee2e6',
          'base-content': '#1d3557',
          'info': '#457b9d',
          'success': '#2a9d8f',
          'warning': '#e9c46a',
          'error': '#e63946',
        },
        'lobsterglass-dark': {
          'primary': '#e63946',
          'primary-content': '#ffffff',
          'secondary': '#a8dadc',
          'secondary-content': '#1d3557',
          'accent': '#f4a261',
          'accent-content': '#1d3557',
          'neutral': '#1d3557',
          'neutral-content': '#f1faee',
          'base-100': '#0d1b2a',
          'base-200': '#1b2838',
          'base-300': '#243447',
          'base-content': '#e8f4f8',
          'info': '#a8dadc',
          'success': '#2a9d8f',
          'warning': '#e9c46a',
          'error': '#e63946',
        },
      },
    ],
    darkTheme: 'lobsterglass-dark',
  },
};
