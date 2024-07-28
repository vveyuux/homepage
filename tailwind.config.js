/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                text: "#0d0c0c",
                background: "#f7f6f6",
                primary: "#99827c",
                secondary: "#c8b7b3",
                accent: "#b4948d",
                textDark: "#f3f2f2",
                backgroundDark: "#1F1B1B",
                primaryDark: "#836d67",
                secondaryDark: "#4d3c38",
                accentDark: "#72524b",
            },
            fontFamily: {
                sans: ["Poppins", "sans-serif"],
            },
        },
    },
    variants: {
        extends: {
            backgroundColor: ['dark'],
            textColor: ['dark'],
            borderColor: ['dark'],
        }
    },
    plugins: [],
};
