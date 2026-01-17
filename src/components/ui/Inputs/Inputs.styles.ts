import { styled } from "@macaron-css/solid";
import { themeContract } from "../../../styles/contracts/theme";
const FormStyled = styled("form", {
  base: {},
});

const MenuStyled = styled("menu", {
  base: {
    margin: "0",
    padding: "0",
    display: "flex",
    gap: "10px",
  },
});
const ButtonStyled = styled("button", {
  base: {
    width: "100%",
    height: "100%",
    padding: "15px 20px",
    cursor: "pointer",
    color: themeContract.colors.color.secondary,
    fontSize: themeContract.fonts.sizes.small,
    fontWeight: themeContract.fonts.weights.bold,
    textTransform: "uppercase",
    backgroundColor: themeContract.colors.background.primary,
    border: "none",
    selectors: {
      "&:hover": {
        backgroundColor: themeContract.colors.background.tertiary,
      },
    },
  },
});
const FormLabelStyled = styled("label", {
  base: {
    height: "100%",
    display: "block",
    position: "relative",
  },
});
const ClearButtonStyled = styled("button", {
  base: {
    position: "absolute",
    right: "8px",
    top: "50%",
    transform: "translateY(-50%)",
    background: "none",
    color: themeContract.colors.color.primary,
    cursor: "pointer",
    outline: "none",
    border: "none",
  },
});

const InputStyled = styled("input", {
  base: {
    padding: "15px 50px 15px 25px",
    width: "100%",
    height: "100%",
    color: themeContract.colors.color.primary,
    backgroundColor: themeContract.colors.background.primary,
    fontSize: themeContract.fonts.sizes.large,
    fontFamily: themeContract.fonts.families.primary,
    border: "none",
    outline: "none",
    boxSizing: "border-box",
    selectors: {
      "&::placeholder": {
        fontStyle: "italic",
      },
    },
  },
});
const InputsStyled = styled("div", {
  base: {
    padding: "10px 0",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    alignItems: "stretch",
  },
});
export {
  FormStyled,
  MenuStyled,
  ButtonStyled,
  FormLabelStyled,
  ClearButtonStyled,
  InputStyled,
  InputsStyled,
};
