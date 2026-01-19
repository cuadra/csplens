import { createTheme } from "@macaron-css/core";
import { themeContract } from "../contracts/theme";
export const lightTheme = createTheme(themeContract, {
  colors: {
    color: {
      primary: "#555A75",
      secondary: "#202127",
      tertiary: "#4C33A6",
      quatenary: "#202127",
      quinary: "#555A75",
    },
    background: {
      primary: "#E1E4EB",
      secondary: "#F4F5F7",
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
