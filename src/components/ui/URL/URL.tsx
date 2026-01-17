import { createSignal, createEffect, For, Component } from "solid-js";
import { URLStyles } from "./URL.styles";

import { darkTheme } from "../../../styles/themes/dark";
import { lightTheme } from "../../../styles/themes/light";
interface IURL {
  address: () => string;
  isDark: () => boolean;
}

export const U: Component<IURL> = (props) => {
  const { address, isDark } = props;
  return (
    <URLStyles class={isDark() ? darkTheme : lightTheme}>{address()}</URLStyles>
  );
};
