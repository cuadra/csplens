import { styled } from "@macaron-css/solid";
import { themeContract } from "../../../styles/contracts/theme";
const URLStyles = styled("div", {
  base: {
    padding: "15px 10px 15px 20px",
    color: themeContract.colors.color.quatenary,
    fontFamily: themeContract.fonts.families.primary,
    fontSize: themeContract.fonts.sizes.medium,
    borderBottom: `1px solid rgba(255, 255, 255, 0.1)`,
    overflowWrap: "break-word",
    wordBreak: "break-all",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
const Button = styled("button", {
  base: {
    opacity: 0.3,
    marginLeft: "10px",
    color: themeContract.colors.color.quatenary,
    background: "transparent",
    border: "none",
    cursor: "pointer",
  },
});
export { URLStyles, Button };
