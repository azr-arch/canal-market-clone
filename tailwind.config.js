/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                apercu: ["ApercuMonoPro", "sans-serif"],
                ogg: ["Ogg", "sans-serif"],
            },
            maxWidth: {
                home: "calc(100% - 180px)",
            },
            colors: {
                blue: "#5ea3ec",
                red: "#f64444",
                yellow: "#ffb400",
            },
        },
    },
    plugins: [],
};
