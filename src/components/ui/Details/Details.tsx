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

export const Details: Component<IDetails> = (props) => {
  const { directive, index, filter, detailsOpen, theme } = props;
  return (
    <DetailsStyled class={theme} open={detailsOpen()}>
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
