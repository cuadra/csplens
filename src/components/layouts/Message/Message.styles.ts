import { styled } from "@macaron-css/solid";
import { themeContract } from "../../../styles/contracts/theme";
const MessageStyled = styled("div", {
  base: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
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
export { MessageStyled, H2Styled };
