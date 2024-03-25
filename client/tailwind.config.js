module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#fff",
        button: "#000",
        gray: {
          "100": "rgba(0, 0, 0, 0.5)",
          "200": "rgba(0, 0, 0, 0.4)",
          "300": "rgba(250, 250, 250, 0.4)",
          "400": "rgba(250, 250, 250, 0.7)",
        },
        text: "#fafafa",
        "secondary-2": "#db4444",
      },
      spacing: {},
      fontFamily: {
        "title-16px-regular": "Poppins",
        "heading-24px-bold": "Inter",
      },
    },
    fontSize: {
      base: "16px",
      xs: "12px",
      xl: "20px",
      "5xl": "24px",
      lgi: "19px",
      "17xl": "36px",
      sm: "14px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  }
}