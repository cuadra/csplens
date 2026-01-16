import { createSignal, createEffect, For, Component } from "solid-js";
import { URLStyles } from "./URL.styles";

interface IURL {
  url: string;
  theme: string;
}

export const URL: Component<IURL> = (props) => {
  const { url, theme } = props;
  return <URLStyles class={theme}>{url}</URLStyles>;
};
