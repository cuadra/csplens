import { For, Component } from "solid-js";
import { IDetails } from "./Details.types";
import {
  DetailsStyled,
  SummaryStyled,
  SummaryLabelStyled,
  ItemsStyled,
  ItemStyled,
  CountStyled,
  IconStyled,
} from "./Details.styles";

import { OcDotfill2 } from "solid-icons/oc";

import { darkTheme } from "../../../styles/themes/dark";
import { lightTheme } from "../../../styles/themes/light";
export const Details: Component<IDetails> = (props) => {
  const { directive, index, filter, detailsOpen, isDark } = props;
  return (
    <DetailsStyled
      class={isDark() ? darkTheme : lightTheme}
      open={detailsOpen()}
    >
      <SummaryStyled>
        <SummaryLabelStyled>
          {index + 1}. {directive.type}
        </SummaryLabelStyled>
        <CountStyled>{directive.entries.length}</CountStyled>
      </SummaryStyled>
      <ItemsStyled>
        <For each={directive.entries.filter((l) => l.includes(filter()))}>
          {(entry) => (
            <ItemStyled>
              <IconStyled>
                <OcDotfill2 />
              </IconStyled>
              {entry}
            </ItemStyled>
          )}
        </For>
      </ItemsStyled>
    </DetailsStyled>
  );
};
