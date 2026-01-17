import { createTheme } from "@macaron-css/core";
import { themeContract } from "../contracts/theme";
export const darkTheme = createTheme(themeContract, {
  colors: {
    color: {
      primary: "#FFF",
      secondary: "#CCC",
      tertiary: "#4C33A6",
      quatenary: "#CCC",
      quinary: "#666",
    },
    background: {
      primary: "#2A2D40",
      secondary: "#202127",
      tertiary: "#4C33A6",
      quatenary: "#445EF2",
    },
  },
  fonts: {
    families: {
      primary: "'Open Sans', sans-serif",
      secondary: "Georgia, serif",
    },
    sizes: {
      small: "10px",
      medium: "12px",
      large: "13px",
      xlarge: "22px",
    },
    weights: {
      regular: "400",
      bold: "700",
    },
  },
});
