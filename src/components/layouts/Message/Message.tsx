import { Component } from "solid-js";
import { TiRefresh } from "solid-icons/ti";
import { BiSolidError } from "solid-icons/bi";
import {
  MessageStyled,
  H1Styled,
  H2Styled,
  PStyled,
  AStyled,
} from "./Message.styles";

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
          <H1Styled>
            <BiSolidError size={60} />
            CSP not detected
          </H1Styled>
          <H2Styled class={isDark() ? darkTheme : lightTheme}>n/a</H2Styled>
          <PStyled class={isDark() ? darkTheme : lightTheme}>
            <span>{address()}</span>
          </PStyled>
        </MessageStyled>
      )}
      {status() === "empty" && (
        <MessageStyled class={isDark() ? darkTheme : lightTheme}>
          <H1Styled>
            <BiSolidError size={60} />
            CSP detected
          </H1Styled>
          <H2Styled class={isDark() ? darkTheme : lightTheme}>
            No directives found.
          </H2Styled>

          <PStyled class={isDark() ? darkTheme : lightTheme}>
            <span>{address()}</span>
          </PStyled>
        </MessageStyled>
      )}
      {status() === "default" && (
        <MessageStyled class={isDark() ? darkTheme : lightTheme}>
          <H1Styled>
            <TiRefresh size={80} />
            Welcome to CSP Lens!
          </H1Styled>
          <H2Styled class={isDark() ? darkTheme : lightTheme}>
            To get started load/reload a website.
          </H2Styled>
          <PStyled class={isDark() ? darkTheme : lightTheme}>
            <span>Need help? Submit an Issue </span>
            <AStyled
              target="_blank"
              href="https://github.com/cuadra/csplens/issues"
              title="Submit an issue on Github"
            >
              here
            </AStyled>
            .
          </PStyled>
        </MessageStyled>
      )}
    </>
  );
};
