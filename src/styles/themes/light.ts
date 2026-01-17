import { createTheme } from "@macaron-css/core";
import { themeContract } from "../contracts/theme";
export const lightTheme = createTheme(themeContract, {
  colors: {
    color: {
      primary: "#2A2D40",
      secondary: "#202127",
      tertiary: "#4C33A6",
      quatenary: "#202127",
      quinary: "#2A2D40",
    },
    background: {
      primary: "#B9BCC4",
      secondary: "#EFEFEF",
      tertiary: "#CCC",
      quatenary: "#FFF",
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
