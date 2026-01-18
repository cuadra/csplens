import { createSignal, createEffect, For, Component } from "solid-js";
import { URLStyles, Button } from "./URL.styles";

import { darkTheme } from "../../../styles/themes/dark";
import { lightTheme } from "../../../styles/themes/light";
import { FaSolidLock, FaSolidLockOpen } from "solid-icons/fa";

interface IURL {
  address: () => string;
  isDark: () => boolean;
  isLocked: () => boolean;
  setIsLocked: (locked: boolean) => void;
}

export const U: Component<IURL> = (props) => {
  const { address, isDark, isLocked, setIsLocked } = props;
  const lockHandler = () => {
    setIsLocked(!isLocked());
  };
  return (
    <URLStyles class={isDark() ? darkTheme : lightTheme}>
      {address()}
      <Button onClick={lockHandler}>
        {isLocked() && <FaSolidLock size={20} />}
        {!isLocked() && <FaSolidLockOpen size={20} />}
      </Button>
    </URLStyles>
  );
};
