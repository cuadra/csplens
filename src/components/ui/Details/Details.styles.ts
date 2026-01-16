import { styled } from "@macaron-css/solid";
import { themeContract } from "../../../styles/contracts/theme";
const ItemsStyled = styled("ol", {
  base: {
    listStyle: "none",
    padding: "0 0 20px",
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
    padding: "15px 50px 15px",
    color: "rgba(255, 255, 255, 0.5)",
    display: "flex",
    alignItems: "center",
    selectors: {
      "&:nth-child(odd)": {},
      "&:nth-child(even)": {
        backgroundColor: "rgba(255, 255, 255, 0.02)",
      },
      "&:hover": {
        backgroundColor: "rgba(255, 255, 255, 0.04)",
      },
    },
  },
});
const CountStyled = styled("span", {
  base: {
    width: "30px",
    height: "30px",
    backgroundColor: themeContract.colors.background.quatenary,
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
    padding: "20px 15px",
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
    color: "rgba(255, 255, 255, 0.1)",
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
