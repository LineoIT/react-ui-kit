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
          primary: withOpacity('--color-primary'),
        },
      },
      gradientColorStops: {
        skin: {
          hue: withOpacity('--color-fill'),
        },
      },
    },
  },
  plugins: [
    
  ],
}
