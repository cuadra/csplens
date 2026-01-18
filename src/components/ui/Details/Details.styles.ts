import { styled } from "@macaron-css/solid";
import { themeContract } from "../../../styles/contracts/theme";
const ItemsStyled = styled("ol", {
  base: {
    listStyle: "none",
    padding: "0",
    margin: "0",
    display: "flex",
    flexDirection: "column",
    fontFamily: themeContract.fonts.families.primary,
    fontSize: themeContract.fonts.sizes.medium,
  },
});
const ItemStyled = styled("li", {
  base: {
    margin: "0",
    padding: "15px 20px 15px",
    color: themeContract.colors.color.quatenary,
    display: "flex",
    alignItems: "center",
    overflowWrap: "break-word",
    wordBreak: "break-all",
    selectors: {
      "&:nth-child(odd)": {},
      "&:nth-child(even)": {
        backgroundColor: "rgba(255, 255, 255, 0.02)",
      },
      "&:hover": {
        backgroundColor: "rgba(255, 255, 255, 0.04)",
      },
      "&:last-child": {
        marginBottom: "10px",
      },
    },
  },
});
const CountStyled = styled("span", {
  base: {
    width: "25px",
    height: "25px",
    backgroundColor: themeContract.colors.background.secondary,
    borderRadius: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "2px 2px",
    textAlign: "center",
    fontSize: themeContract.fonts.sizes.medium,
    fontWeight: themeContract.fonts.weights.bold,
    fontFamily: themeContract.fonts.families.primary,
  },
});
const DetailsStyled = styled("details", {
  base: {
    backgroundColor: themeContract.colors.background.secondary,
  },
});
const SummaryStyled = styled("summary", {
  base: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px",
    color: themeContract.colors.color.primary,
    fontFamily: themeContract.fonts.families.primary,
    fontSize: themeContract.fonts.sizes.large,
    backgroundColor: themeContract.colors.background.primary,
    cursor: "pointer",
    borderBottom: `1px solid rgba(255, 255, 255, 0.1)`,
  },
});

const SummaryLabelStyled = styled("span", {
  base: {
    fontWeight: "bold",
    paddingLeft: "10px",
    display: "flex",
    alignItems: "center",
  },
});

const IconStyled = styled("span", {
  base: {
    marginRight: "10px",
    color: themeContract.colors.color.quinary,
    display: "inline-block",
  },
});

export {
  DetailsStyled,
  SummaryStyled,
  SummaryLabelStyled,
  IconStyled,
  CountStyled,
  ItemsStyled,
  ItemStyled,
};
