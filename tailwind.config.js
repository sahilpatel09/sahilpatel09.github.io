module.exports = {
  mode: "jit",
  purge: {
    //      enabled: process.env.NODE_ENV === 'production',
    enabled: true,
    content: [
      "./src/**/*.vue",
      "./src/**/*.js",
      "./src/**/*.jsx",
      "./src/**/*.pug",
      "./src/**/*.html",
      "./src/**/*.md",
      "./posts/*.md",
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "navy": "#0a192f",
        "light-navy": "#112240",
        "lightest-navy": "#233554",
        "slate": "#8892b0",
        "light-slate": "#a8b2d1",
        "lightest-slate": "#ccd6f6",
        "white": "#e6f1ff",
        "cygreen": "#64ffda",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
