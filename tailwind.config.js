const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
                serif: ['Merriweather', ...defaultTheme.fontFamily.serif],
                mono: ['Menlo', ...defaultTheme.fontFamily.mono],
            },
            colors:{
                'insinum': {
                    'light': '#D4F1F4',
                    DEFAULT: '#75E6DA',
                    'dark': '#189AB4',
                    'darker': '#05445E',
                }
            }
        },
    },

    plugins: [require('@tailwindcss/forms')],
};
