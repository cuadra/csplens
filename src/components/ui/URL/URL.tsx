import { createSignal, createEffect, For, Component } from "solid-js";
import { URLStyles } from "./URL.styles";

interface IURL {
  address: () => string;
  theme: string;
}

export const U: Component<IURL> = (props) => {
  const { address, theme } = props;
  return <URLStyles class={theme}>{address()}</URLStyles>;
};
