import { styled } from "@macaron-css/solid";
import { themeContract } from "../../../styles/contracts/theme";
const URLStyles = styled("div", {
  base: {
    padding: "15px 20px",
    color: "rgba(255, 255, 255, 0.5)",
    fontFamily: themeContract.fonts.families.primary,
    fontSize: themeContract.fonts.sizes.medium,
    borderBottom: `1px solid rgba(255, 255, 255, 0.1)`,
  },
});
export { URLStyles };
