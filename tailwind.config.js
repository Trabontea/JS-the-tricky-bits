const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    // purge: [],
    // for production
    purge: {
        enabled: false,
        content: ["./**/*.html", "./**/*.js"],
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter var", ...defaultTheme.fontFamily.sans],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require("@tailwindcss/forms")],
};
