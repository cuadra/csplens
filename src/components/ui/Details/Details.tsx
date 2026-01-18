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
import { IoCopy } from "solid-icons/io";
import { darkTheme } from "../../../styles/themes/dark";
import { lightTheme } from "../../../styles/themes/light";
import { CopyButton } from "../CopyButton/CopyButton";
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
          <CountStyled>
            <sup>{directive.entries.length}</sup>
          </CountStyled>
        </SummaryLabelStyled>
        <CopyButton text={directive.type} isDark={isDark} />
      </SummaryStyled>
      <ItemsStyled>
        <For each={directive.entries.filter((l) => l.includes(filter()))}>
          {(entry) => (
            <ItemStyled>
              <IconStyled>
                <OcDotfill2 />
              </IconStyled>
              {entry}
              <CopyButton text={entry} isDark={isDark} />
            </ItemStyled>
          )}
        </For>
      </ItemsStyled>
    </DetailsStyled>
  );
};
