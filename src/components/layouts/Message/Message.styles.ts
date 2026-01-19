import { styled } from "@macaron-css/solid";
import { themeContract } from "../../../styles/contracts/theme";
const MessageStyled = styled("div", {
  base: {
    padding: "40px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    boxSizing: "border-box",
  },
});
const H1Styled = styled("h1", {
  base: {
    margin: "0",
    padding: "0",
    textAlign: "center",
    color: themeContract.colors.color.primary,
    fontFamily: themeContract.fonts.families.primary,
    fontSize: themeContract.fonts.sizes.xlarge,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
});
const H2Styled = styled("h2", {
  base: {
    margin: "0",
    padding: "0",
    textAlign: "center",
    color: themeContract.colors.color.primary,
    fontFamily: themeContract.fonts.families.primary,
    fontSize: themeContract.fonts.sizes.xlarge,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    opacity: "0.3",
  },
});
const PStyled = styled("p", {
  base: {
    color: themeContract.colors.color.primary,
    fontSize: themeContract.fonts.sizes.large,
  },
});
const AStyled = styled("a", {
  base: {
    color: themeContract.colors.color.primary,
  },
});

export { MessageStyled, H1Styled, H2Styled, PStyled, AStyled };
