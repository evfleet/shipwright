/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/components/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        blue: {
          10: "#000E96",
          20: "#1426CF",
          30: "#2E40E9",
          40: "#4759FF",
          50: "#6775FF",
          60: "#8590FF",
          70: "#A4ADFF",
          80: "#C2C8FF",
          90: "#E1E4FF",
          95: "#EFF1FF",
          99: "#F9FAFF",
          a6: "#0214BD06",
          a12: "#0214BD12",
          a22: "#0214BD22",
          a28: "#0214BD28",
        },
        red: {
          10: "#530000",
          20: "#A50202",
          30: "#BF1C1C",
          40: "#D83535",
          50: "#F24F4F",
          60: "#FF6D6D",
          70: "#FF9292",
          80: "#FFB6B6",
          90: "#FFDBDB",
          95: "#FFECEC",
          99: "#FFF8F8",
          a6: "#D02D2D06",
          a12: "#D02D2D12",
          a22: "#D02D2D22",
          a28: "#D02D2D28",
        },
        green: {
          10: "#002A02",
          20: "#005604",
          30: "#16731A",
          40: "#2F8C33",
          50: "#49A64D",
          60: "#62BF66",
          70: "#7CD980",
          80: "#95F299",
          90: "#C1FFC4",
          95: "#DFFFE0",
          99: "#F3FFF3",
          a6: "#43A04706",
          a12: "#43A04712",
          a22: "#43A04722",
          a28: "#43A04728",
        },
        gray: {
          10: "#191919",
          20: "#333333",
          30: "#4D4D4D",
          40: "#666666",
          50: "#808080",
          60: "#999999",
          70: "#B3B3B3",
          80: "#CCCCCC",
          90: "#E6E6E6",
          95: "#F2F2F2",
          99: "#FAFAFA",
        },
      },
    },
  },
  plugins: [],
};
