import { styled } from "@macaron-css/solid";
import { themeContract } from "../../../styles/contracts/theme";
const NavStyled = styled("div", {
  base: {
    marginBottom: "20px",
    padding: "0 15px",
    width: "100%",
    gap: "10px",
    color: themeContract.colors.color.primary,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxSizing: "border-box",
  },
});
const Anchor = styled("a", {
  base: {
    color: themeContract.colors.color.primary,
  },
});
const H2Styled = styled("h2", {
  base: {
    textAlign: "center",
    color: themeContract.colors.color.primary,
    fontFamily: themeContract.fonts.families.primary,
    fontSize: themeContract.fonts.sizes.xlarge,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
});
export { NavStyled, Anchor, H2Styled };
