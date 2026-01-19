import { Component } from "solid-js";
import { NavStyled, Anchor, H2Styled } from "./Support.styles";
import { AiFillHeart } from "solid-icons/ai";
import { FaBrandsGithubAlt } from "solid-icons/fa";

import { darkTheme } from "../../../styles/themes/dark";
import { lightTheme } from "../../../styles/themes/light";

interface ISupportProps {
  isDark: () => boolean;
  status: () => string;
}

export const Support: Component<ISupportProps> = (props) => {
  const { status, isDark } = props;
  return (
    <NavStyled class={isDark() ? darkTheme : lightTheme}>
      <Anchor
        target="_blank"
        class={isDark() ? darkTheme : lightTheme}
        href="https://github.com/cuadra/csplens"
        title="Visit Github Repository"
      >
        <FaBrandsGithubAlt size={20} />
      </Anchor>
    </NavStyled>
  );
};
