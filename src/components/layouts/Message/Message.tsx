import { Component } from "solid-js";
import { TiRefresh } from "solid-icons/ti";
import { BiSolidError } from "solid-icons/bi";
import { MessageStyled, H2Styled } from "./Message.styles";

import { darkTheme } from "../../../styles/themes/dark";
import { lightTheme } from "../../../styles/themes/light";

interface IMessageProps {
  isDark: () => boolean;
  status: () => string;
  address: () => string;
}
export const Message: Component<IMessageProps> = (props) => {
  const { status, isDark, address } = props;
  return (
    <>
      {status() === "not_found" && (
        <MessageStyled class={isDark() ? darkTheme : lightTheme}>
          <H2Styled class={isDark() ? darkTheme : lightTheme}>
            <BiSolidError size={60} />
            CSP not detected.
            <br />
            <small>({address()})</small>
          </H2Styled>
        </MessageStyled>
      )}
      {status() === "empty" && (
        <MessageStyled class={isDark() ? darkTheme : lightTheme}>
          <H2Styled class={isDark() ? darkTheme : lightTheme}>
            <BiSolidError size={60} />
            CSP detected but no directives found.
            <br />
            <small>({address()})</small>
          </H2Styled>
        </MessageStyled>
      )}
      {status() === "default" && (
        <MessageStyled class={isDark() ? darkTheme : lightTheme}>
          <H2Styled class={isDark() ? darkTheme : lightTheme}>
            <TiRefresh size={80} />
            Load/Reload a website.
          </H2Styled>
        </MessageStyled>
      )}
    </>
  );
};
