/** @type {import('tailwindcss').Config} */

function withOpacity(variableName) {
    return ({ opacityValue }) => {
        if (opacityValue !== undefined) {
            return `rgba(var(${variableName}), ${opacityValue})`;
        }
        return `rgb(var(${variableName}))`;
    };
}

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    darkMode: 'class', // false, media or class
    theme: {
        extend: {
            transitionProperty: {
                'opacity-visibility': 'opacity, visibility',
                'opacity-visibility-transform': 'opacity, visibility, transform',
                'max-height': 'max-height'
            },
            colors: {
                primary: withOpacity('--x-primary'),
                'primary-dark': withOpacity('--x-primary-dark'),
                accent: withOpacity('--x-accent')
            },
            keyframes: {
                'slide-left': {
                    from: { opacity: '0', transform: 'translateX(100px)' },
                    to: { opacity: '1', transform: 'translateX(0)' }
                },
                fade: {
                    from: { opacity: '0' },
                    to: { opacity: '1' }
                }
            },
            animation: {
                toast: 'slide-left .3s forwards',
                fade: 'fade .3s forwards'
            },
            dropShadow: {
                box: ['rgb(0 0 0 / 20%) 0px 2px 1px -1px', 'rgb(0 0 0 / 14%) 0px 1px 1px 0px', 'rgb(0 0 0 / 12%) 0px 1px 3px 0px;']
            }
        }
    },
    plugins: []
};
