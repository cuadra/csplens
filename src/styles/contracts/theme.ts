import { createThemeContract } from "@macaron-css/core";
export const themeContract = createThemeContract({
  colors: {
    color: {
      primary: null,
      secondary: null,
      tertiary: null,
      quatenary: null,
      quinary: null,
    },
    background: {
      primary: null,
      secondary: null,
      tertiary: null,
      quatenary: null,
    },
  },
  fonts: {
    families: {
      primary: null,
      secondary: null,
    },
    sizes: {
      small: null,
      medium: null,
      large: null,
      xlarge: null,
    },
    weights: {
      regular: null,
      bold: null,
    },
  },
});
