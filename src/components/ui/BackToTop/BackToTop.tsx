import { createSignal, createEffect, For, Component } from "solid-js";
import { BiRegularChevronUp } from "solid-icons/bi";
import { ButtonStyled } from "./BackToTop.styles";

import { darkTheme } from "../../../styles/themes/dark";
import { lightTheme } from "../../../styles/themes/light";
interface BackToTopProps {
  isDark: () => boolean;
}

export const BackToTop: Component<BackToTopProps> = (props) => {
  const { isDark } = props;
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <ButtonStyled
      onClick={scrollToTop}
      class={isDark() ? darkTheme : lightTheme}
    >
      <BiRegularChevronUp />
    </ButtonStyled>
  );
};
