module.exports = {
    mode: 'jit',
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: 'media', // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                gray: {
                    200: "#EFF1F4",
                    850: "#151D2C",
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
