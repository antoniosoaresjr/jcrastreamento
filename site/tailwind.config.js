/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,jsx}'],
    theme: {
        extend: {
            colors: {
                golden: '#FBC02D',
                'golden-dark': '#E5A800',
                cyan: '#00B4F0',
                'cyan-dark': '#0090C0',
                navy: '#1E2A3A',
                charcoal: '#2E3440',
                cream: '#FFFDF7',
                surface: '#F0F2F5',
                dark: '#111827',
            },
            fontFamily: {
                heading: ['"Space Grotesk"', 'sans-serif'],
                drama: ['"DM Serif Display"', 'serif'],
                mono: ['"Space Mono"', 'monospace'],
                body: ['"Space Grotesk"', 'sans-serif'],
            },
            borderRadius: {
                '2xl': '2rem',
                '3xl': '3rem',
                '4xl': '4rem',
            },
        },
    },
    plugins: [],
};
