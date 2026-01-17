import { createSignal, createEffect, For, Component } from "solid-js";
import { TbRefresh } from "solid-icons/tb";
import { BiSolidError } from "solid-icons/bi";
import { MessageStyled, H2Styled } from "./Message.styles";

interface IMessageProps {
  theme: string;
  status: () => string;
}
export const Message: Component<IMessageProps> = (props) => {
  const { status, theme } = props;
  return (
    <>
      {status() === "not_found" && (
        <MessageStyled>
          <H2Styled class={theme}>
            <BiSolidError size={60} color={"rgba(255,255,255, 0.5)"} />
            <br />
            Content security policy not detected.
          </H2Styled>
        </MessageStyled>
      )}
      {status() === "" && (
        <MessageStyled>
          <H2Styled class={theme}>
            <TbRefresh size={60} color={"rgba(255,255,255, 0.5)"} />
            <br />
            Load/Reload a website.
          </H2Styled>
        </MessageStyled>
      )}
    </>
  );
};
