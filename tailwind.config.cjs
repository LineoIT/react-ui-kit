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
      textColor: {
        skin: {
          base: withOpacity('--color-text-base'),
          muted: withOpacity('--color-text-muted'),
          inverted: withOpacity('--color-text-inverted'),
          primary: withOpacity('--color-primary'),
        },
      },
      backgroundColor: {
        skin: {
          fill: withOpacity('--color-fill'),
          'button-accent': withOpacity('--color-button-accent'),
          'button-accent-hover': withOpacity('--color-button-accent-hover'),
          'button-muted': withOpacity('--color-button-muted'),
          primary: withOpacity('--color-primary-base'),
        },
      },
      gradientColorStops: {
        skin: {
          hue: withOpacity('--color-fill'),
        },
      },
      transitionProperty: {
        'opacity-visibility': 'opacity, visibility',
        'opacity-visibility-transform': 'opacity, visibility, transform',
      },
      colors: {
        'primary': 'var(--color-primary)',
        'primary-dark': 'var(--color-primary-dark)',
        'accent': 'var(--color-accent)',
        'skin': 'var(--color-skin)',
        'skin-dark': 'var(--color-skin-dark)',
        'word': 'var(--color-text)',
        'word-dark': 'var(--color-text-dark)',

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
      }
    },
  },
  plugins: [
    
  ],
}
