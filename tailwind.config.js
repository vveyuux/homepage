/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                text: "#0d0c0c",
                background: "#f7f6f6",
                primary: "#99827c",
                secondary: "#c8b7b3",
                accent: "#b4948d",
            },
            fontFamily: {
                sans: ["Poppins", "sans-serif"],
            },
        },
    },
    plugins: [],
};
