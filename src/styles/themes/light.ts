import { createTheme } from "@macaron-css/core";
import { themeContract } from "../contracts/theme";
export const lightTheme = createTheme(themeContract, {
  colors: {
    color: {
      primary: "#5C3ABC",
      secondary: "#445EF2",
      tertiary: "#4C33A6",
    },
    background: {
      primary: "#5C3ABC",
      secondary: "#445EF2",
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
      large: "20px",
      xlarge: "30px",
    },
    weights: {
      regular: "400",
      bold: "700",
    },
  },
});
