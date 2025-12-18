/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                'kid-primary': '#FFC9A1',
                'kid-secondary': '#A8E6CF',
                'kid-dark': '#4D4D4D',
                'kid-accent': '#FF8C94',
            },
        },
    },
    plugins: [],
};