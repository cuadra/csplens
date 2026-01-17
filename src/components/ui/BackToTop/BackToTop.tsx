import { createSignal, createEffect, For, Component } from "solid-js";
import { BiRegularChevronUp } from "solid-icons/bi";
import { ButtonStyled } from "./BackToTop.styles";

interface BackToTopProps {
  theme: string;
}

export const BackToTop: Component<BackToTopProps> = (props) => {
  const { theme } = props;
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <ButtonStyled onClick={scrollToTop} class={theme}>
      <BiRegularChevronUp />
    </ButtonStyled>
  );
};
