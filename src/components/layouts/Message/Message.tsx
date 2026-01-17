import { createSignal, createEffect, For, Component } from "solid-js";
import { TbRefresh } from "solid-icons/tb";
import { BiSolidError } from "solid-icons/bi";
import { MessageStyled, H2Styled } from "./Message.styles";

import { darkTheme } from "../../../styles/themes/dark";
import { lightTheme } from "../../../styles/themes/light";

interface IMessageProps {
  isDark: () => boolean;
  status: () => string;
}
export const Message: Component<IMessageProps> = (props) => {
  const { status, isDark } = props;
  return (
    <>
      {status() === "not_found" && (
        <MessageStyled>
          <H2Styled class={isDark() ? darkTheme : lightTheme}>
            <BiSolidError size={60} />
            <br />
            Content security policy not detected.
          </H2Styled>
        </MessageStyled>
      )}
      {status() === "" && (
        <MessageStyled>
          <H2Styled class={isDark() ? darkTheme : lightTheme}>
            <TbRefresh size={60} />
            <br />
            Load/Reload a website.
          </H2Styled>
        </MessageStyled>
      )}
    </>
  );
};
