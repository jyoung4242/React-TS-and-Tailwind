module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateRows: {
        12: "repeat(12, minmax(0,1fr))",
      },
      gridRow: {
        "span-11": "span 11 / span 11",
        "span-10": "span 10 / span 10",
      },
      gridRowEnd: {
        13: "13",
      },
    },
  },
  plugins: [],
}
