import { createTheme } from "@macaron-css/core";
import { themeContract } from "../contracts/theme";
export const darkTheme = createTheme(themeContract, {
  colors: {
    color: {
      primary: "#FFF",
      secondary: "#202127",
      tertiary: "#4C33A6",
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
      small: "12px",
      medium: "16px",
      large: "18px",
      xlarge: "22px",
    },
    weights: {
      regular: "400",
      bold: "700",
    },
  },
});
