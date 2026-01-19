import { createSignal, createEffect, For, Component, onMount } from "solid-js";

import { styled } from "@macaron-css/solid";
import { themeContract } from "../../../styles/contracts/theme";
import { darkTheme } from "../../../styles/themes/dark";
import { lightTheme } from "../../../styles/themes/light";
import { TiRefresh } from "solid-icons/ti";

interface IReloadProps {
  isDark: () => boolean;
}

const DivStyled = styled("div", {
  base: {
    padding: "10px",
    width: "100%",
    color: themeContract.colors.color.primary,
    fontSize: themeContract.fonts.sizes.small,
    backgroundColor: themeContract.colors.background.primary,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0 -2px 5px rgba(0, 0, 0, 0.3)",
    boxSizing: "border-box",
  },
});
const ButtonStyled = styled("button", {
  base: {
    marginLeft: "10px",
    padding: "3px 3px 3px 10px",
    display: "flex",
    fontSize: themeContract.fonts.sizes.small,
    alignItems: "center",
    backgroundColor: themeContract.colors.background.secondary,
    border: "none",
    cursor: "pointer",
    color: themeContract.colors.color.secondary,
    borderRadius: "5px",
  },
});
const IconStyled = styled("span", {
  base: {
    display: "inline-block",
    position: "relative",
    top: "0px",
  },
});

export const Reload: Component<IReloadProps> = (props) => {
  const { isDark } = props;

  return (
    <DivStyled class={isDark() ? darkTheme : lightTheme}>
      No change?
      <ButtonStyled
        class={isDark() ? darkTheme : lightTheme}
        onClick={async () => {
          if (!chrome?.tabs) return;
          const [tab] = await chrome.tabs.query({
            active: true,
            currentWindow: true,
          });
          if (tab?.id) chrome.tabs.reload(tab.id, { bypassCache: true });
        }}
      >
        Hard Reload
        <IconStyled>
          <TiRefresh size={25} />
        </IconStyled>
      </ButtonStyled>
    </DivStyled>
  );
};
