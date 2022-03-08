const defaultTheme = require("tailwindcss/lib/public/default-theme");
const colors = require('tailwindcss/colors');

module.exports = {
    content: [
        'src/**/*.js',
        'src/**/*.jsx',
        'src/**/*.ts',
        'src/**/*.tsx',
        'public/**/*.html',
    ],
    theme: {
        extend: {
            colors : {
                cyan: colors.cyan,
            },
        },
        screens: {
            'xs': '280px',
            ...defaultTheme.default.screens
        }
    },
    variants: {},
    plugins: [
        require('@tailwindcss/forms'),
    ],
}