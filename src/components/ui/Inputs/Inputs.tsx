import { Component } from "solid-js";
import { AiOutlineClose } from "solid-icons/ai";
import {
  InputsStyled,
  FormStyled,
  MenuStyled,
  ButtonStyled,
  FormLabelStyled,
  ClearButtonStyled,
  InputStyled,
} from "./Inputs.styles";
interface IInputs {
  filter: string;
  isDark: () => boolean;
  setDetailsOpen: (value: boolean) => void;
  setFilter: (value: string) => void;
}
import { darkTheme } from "../../../styles/themes/dark";
import { lightTheme } from "../../../styles/themes/light";
export const Inputs: Component<IInputs> = (props) => {
  const { filter, setFilter, setDetailsOpen, isDark } = props;

  let inputRef!: HTMLInputElement;

  const inputHandler = (e: Event) => {
    const target = e.target as HTMLInputElement;
    setFilter(target.value);
  };
  const openDetails = () => {
    setDetailsOpen(false); //reset
    setDetailsOpen(true);
  };
  const closeDetails = () => {
    setDetailsOpen(false);
  };
  const resetHandler = (e: Event) => {
    e.preventDefault();
    setFilter("");
    if (inputRef) {
      inputRef.value = "";
    }
  };
  return (
    <InputsStyled class={isDark() ? darkTheme : lightTheme}>
      <MenuStyled>
        <ButtonStyled onClick={openDetails}>Expand All</ButtonStyled>
        <ButtonStyled onClick={closeDetails}>Collapse All</ButtonStyled>
      </MenuStyled>
      <FormStyled>
        <FormLabelStyled>
          <InputStyled
            type="text"
            placeholder="Filter entries..."
            onInput={inputHandler}
            value={filter}
            ref={inputRef}
          />
          <ClearButtonStyled onClick={resetHandler}>
            <AiOutlineClose size={20} />
          </ClearButtonStyled>
        </FormLabelStyled>
      </FormStyled>
    </InputsStyled>
  );
};
