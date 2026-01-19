import { Component } from "solid-js";
import { IoCopy } from "solid-icons/io";
import { styled } from "@macaron-css/solid";

import { themeContract } from "../../../styles/contracts/theme";

import { darkTheme } from "../../../styles/themes/dark";
import { lightTheme } from "../../../styles/themes/light";
export const CopyButton: Component<{ text: string; isDark: () => boolean }> = (
  props,
) => {
  const { text, isDark } = props;

  const ButtonStyled = styled("button", {
    base: {
      marginTop: "-11px",
      color: themeContract.colors.color.quinary,
      cursor: "pointer",
      background: "transparent",
      border: "none",
      position: "absolute",
      top: "50%",
      right: "8px",
      selectors: {
        "&:active": {
          opacity: 0.6,
        },
      },
    },
  });
  const copyHandler = async (e: MouseEvent) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };
  return (
    <ButtonStyled
      class={isDark() ? darkTheme : lightTheme}
      onClick={copyHandler}
      title="Copy to clipboard"
    >
      <IoCopy size={18} />
    </ButtonStyled>
  );
};
