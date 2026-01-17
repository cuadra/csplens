import { createTheme } from "@macaron-css/core";
import { themeContract } from "../contracts/theme";
export const lightTheme = createTheme(themeContract, {
  colors: {
    color: {
      primary: "#5C3ABC",
      secondary: "#445EF2",
      tertiary: "#4C33A6",
      quatenary: "#000000",
      quinary: "#666",
    },
    background: {
      primary: "#FFF",
      secondary: "#EFEFEF",
      tertiary: "#4C33A6",
      quatenary: "#CCC",
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
