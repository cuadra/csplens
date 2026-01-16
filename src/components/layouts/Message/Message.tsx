import { createSignal, createEffect, For, Component } from "solid-js";
import { TbRefresh } from "solid-icons/tb";
import { BiSolidError } from "solid-icons/bi";
import { MessageStyled, H2Styled } from "./Message.styles";

interface IMessageProps {
  directives: any;
  theme: string;
}
export const Message: Component<IMessageProps> = (props) => {
  const { directives, theme } = props;
  return (
    <>
      {!Array.isArray(directives) && (
        <MessageStyled>
          <H2Styled class={theme}>
            <BiSolidError size={60} color={"rgba(255,255,255, 0.5)"} />
            CSP headers not detected.
          </H2Styled>
        </MessageStyled>
      )}
      {Array.isArray(directives) && directives.length === 0 && (
        <MessageStyled>
          <H2Styled class={theme}>
            <TbRefresh size={60} color={"rgba(255,255,255, 0.5)"} />
            Load/Reload a website.
          </H2Styled>
        </MessageStyled>
      )}
    </>
  );
};
