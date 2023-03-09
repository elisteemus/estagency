/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{html,js,svelte,ts}'
    ],
    theme: {
        extend: {
            colors: {
                'estpurple': '#670F42',
                'esthover': '4B0C31'
            }
        },
    },
    plugins: [],
}