import { createSignal, For, Component } from "solid-js";
import { styled } from "@macaron-css/solid";
import { Message } from "../Message/Message";
import { Details } from "../../../components/ui/Details/Details";
import { Inputs } from "../../../components/ui/Inputs/Inputs";
import { U } from "../../../components/ui/URL/URL";

interface ICSPLens {
  directives: () => any[];
  isDark: () => boolean;
  address: () => string;
  isLocked: () => boolean;
  setIsLocked: (val: boolean) => void;
  status: () => string;
}

const SectionStyled = styled("section", {
  base: {
    flexGrow: 1,
    width: "100%",
  },
});

export const CSPLens: Component<ICSPLens> = (props) => {
  const { directives, isDark, address, isLocked, setIsLocked, status } = props;
  const [filter, setFilter] = createSignal("");
  const [detailsOpen, setDetailsOpen] = createSignal(true);
  return (
    <SectionStyled>
      <Message isDark={isDark} status={status} />
      {Array.isArray(directives()) && directives().length > 0 && (
        <>
          <U
            isDark={isDark}
            address={address}
            isLocked={isLocked}
            setIsLocked={setIsLocked}
          />
          <Inputs
            filter={filter()}
            setFilter={setFilter}
            setDetailsOpen={setDetailsOpen}
            isDark={isDark}
          />
          <For each={directives()} fallback={<div>loading...</div>}>
            {(directive, i) => (
              <Details
                directive={directive}
                index={i()}
                filter={filter}
                detailsOpen={detailsOpen}
                isDark={isDark}
              />
            )}
          </For>
        </>
      )}
    </SectionStyled>
  );
};
