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
  theme: string;
  openDetails: () => void;
  closeDetails: () => void;
  setFilter: (value: string) => void;
}
export const Inputs: Component<IInputs> = (props) => {
  const { filter, setFilter, openDetails, closeDetails, theme } = props;

  let inputRef!: HTMLInputElement;

  const inputHandler = (e: Event) => {
    const target = e.target as HTMLInputElement;
    setFilter(target.value);
  };
  const resetHandler = (e: Event) => {
    e.preventDefault();
    setFilter("");
    if (inputRef) {
      inputRef.value = "";
    }
  };
  return (
    <InputsStyled>
      <MenuStyled class={theme}>
        <ButtonStyled onClick={openDetails}>Expand All</ButtonStyled>
        <ButtonStyled onClick={closeDetails}>Collapse All</ButtonStyled>
      </MenuStyled>
      <FormStyled>
        <FormLabelStyled>
          <InputStyled
            class={theme}
            type="text"
            placeholder="Filter entries..."
            onInput={inputHandler}
            value={filter}
            ref={inputRef}
          />
          <ClearButtonStyled onClick={resetHandler}>
            <AiOutlineClose size={30} />
          </ClearButtonStyled>
        </FormLabelStyled>
      </FormStyled>
    </InputsStyled>
  );
};
