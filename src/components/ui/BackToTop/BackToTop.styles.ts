import { styled } from "@macaron-css/solid";
import { themeContract } from "../../../styles/contracts/theme";

const ButtonStyled = styled("button", {
  base: {
    color: "rgba(255, 255, 255, 0.7)",
    width: "35px",
    height: "35px",
    border: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: themeContract.fonts.families.primary,
    fontSize: themeContract.fonts.sizes.xlarge,
    position: "fixed",
    borderRadius: "4px",
    bottom: "0",
    right: "5px",
    backgroundColor: themeContract.colors.background.tertiary,
    cursor: "pointer",
  },
});

export { ButtonStyled };
