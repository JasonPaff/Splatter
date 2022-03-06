const defaultTheme = require("tailwindcss/lib/public/default-theme");

module.exports = {
    content: [
        'src/**/*.js',
        'src/**/*.jsx',
        'src/**/*.ts',
        'src/**/*.tsx',
        'public/**/*.html',
    ],
    theme: {
        extend: {},
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