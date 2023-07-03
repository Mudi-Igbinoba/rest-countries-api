/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                zinc: {
                    25: '#858585',
                },

                blue: {
                    1000: '#2b3945',
                    1100: '#202c37',
                    1200: '#111517',
                },
            },
            fontFamily: {
                nunito: ['"Nunito Sans"', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
