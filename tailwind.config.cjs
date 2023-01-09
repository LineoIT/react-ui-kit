/** @type {import('tailwindcss').Config} */


function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`
    }
    return `rgb(var(${variableName}))`
  }
}

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class", // false, media or class
  theme: {
    extend: {
      transitionProperty: {
        'opacity-visibility': 'opacity, visibility',
        'opacity-transform': 'visibility, transform',
        'opacity-visibility-transform': 'opacity, visibility, transform',
      },
      colors: {
        'primary': withOpacity('--x-primary'),
        'primary-dark': withOpacity('--x-primary-dark'),
        'primary-darkness': withOpacity('--x-primary-darkness'),
        'accent': withOpacity('--x-accent'),
        'skin': withOpacity('--x-skin'),
        'skin-dark': withOpacity('--x-skin-dark'),
        'word': withOpacity('--x-text'),
        'word-dark': withOpacity('--x-text-dark'),

        'black-10': 'rgba(0,0,0,0.1)',
        'black-20': 'rgba(0,0,0,0.2)',
        'black-30': 'rgba(0,0,0,0.3)',
        'black-40': 'rgba(0,0,0,0.4)',
        'black-50': 'rgba(0,0,0,0.5)',
        'black-60': 'rgba(0,0,0,0.6)',
        'black-70': 'rgba(0,0,0,0.7)',
        'black-80': 'rgba(0,0,0,0.8)',
        'black-90': 'rgba(0,0,0,0.9)',
        'white-5': 'rgba(255,255,255,0.05)',
        'white-10': 'rgba(255,255,255,0.1)',
        'white-20': 'rgba(255,255,255,0.2)',
        'white-30': 'rgba(255,255,255,0.3)',
        'white-40': 'rgba(255,255,255,0.4)',
        'white-50': 'rgba(255,255,255,0.5)',
        'white-60': 'rgba(255,255,255,0.6)',
        'white-70': 'rgba(255,255,255,0.7)',
        'white-80': 'rgba(255,255,255,0.8)',
        'white-90': 'rgba(255,255,255,0.9)',
      },
      keyframes: {
        'slide-left': {
          'from': { opacity: '0', transform: 'translateX(100px)' },
          'to': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-up': {
          'from': { opacity: '0', transform: 'translateY(100px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-down': {
          'from': { opacity: '0', transform: 'translateY(-100px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade': {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        }
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'slide-up': 'slide-up .2s ease-in-out',
        toast: 'slide-left .3s forwards',
        fade: 'fade .3s forwards',
        loader: 'fade .3s infinite'
      },
      dropShadow: {
        'box': [
          'rgb(0 0 0 / 20%) 0px 2px 1px -1px', 
          'rgb(0 0 0 / 14%) 0px 1px 1px 0px', 
          'rgb(0 0 0 / 12%) 0px 1px 3px 0px;'
        ]
      }
    },
  },
  plugins: [
    
  ],
}
