import { createSignal, createEffect, For } from "solid-js";
import {
  createTheme,
  createThemeContract,
  createGlobalTheme,
  createVar,
  fallbackVar,
  style,
  globalStyle,
} from "@macaron-css/core";
import { styled } from "@macaron-css/solid";
import {
  AiFillCaretDown,
  AiFillCaretRight,
  AiOutlineClose,
} from "solid-icons/ai";

import { OcDotfill2 } from "solid-icons/oc";

const arr = [
  {
    type: "connect-src",
    entries: ["self", "api.something.com", "stats.something.com"],
  },
  {
    type: "script-src",
    entries: ["self", "cdn.something.com", "scripts.something.com"],
  },
  {
    type: "style-src",
    entries: ["self", "styles.something.com", "fonts.something.com"],
  },
];

globalStyle("body", {
  backgroundColor: "#202127",
});

const themeContract = createThemeContract({
  colors: {
    color: {
      primary: null,
      secondary: null,
      tertiary: null,
    },
    background: {
      primary: null,
      secondary: null,
      tertiary: null,
      quatenary: null,
    },
  },
});

const darkTheme = createTheme(themeContract, {
  colors: {
    color: {
      primary: "#FFF",
      secondary: "#202127",
      tertiary: "#4C33A6",
    },
    background: {
      primary: "#2A2D40",
      secondary: "#202127",
      tertiary: "#4C33A6",
      quatenary: "#445EF2",
    },
  },
});

const lightTheme = createTheme(themeContract, {
  colors: {
    color: {
      primary: "#5C3ABC",
      secondary: "#445EF2",
      tertiary: "#4C33A6",
    },
    background: {
      primary: "#5C3ABC",
      secondary: "#445EF2",
      tertiary: "#4C33A6",
      quatenary: "#445EF2",
    },
  },
});
const URL = styled("div", {
  base: {
    padding: "15px 20px",
    color: "rgba(255, 255, 255, 0.5)",
    borderBottom: `1px solid rgba(255, 255, 255, 0.1)`,
  },
});
const Menu = styled("div", {
  base: {
    width: "25%",
    display: "flex",
    gap: "10px",
    margin: "10px 0",
  },
});

const Button = styled("button", {
  base: {
    width: "100%",
    padding: "15px 20px",
    cursor: "pointer",
    color: "rgba(255, 255, 255, 0.5)",
    textTransform: "uppercase",
    backgroundColor: themeContract.colors.background.primary,
    border: "none",
    selectors: {
      "&:hover": {
        backgroundColor: themeContract.colors.background.tertiary,
      },
    },
  },
});
const Details = styled("details", {
  base: {
    backgroundColor: themeContract.colors.background.secondary,
  },
});

const Summary = styled("summary", {
  base: {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px 15px",
    color: themeContract.colors.color.primary,
    backgroundColor: themeContract.colors.background.primary,
    cursor: "pointer",
    borderBottom: `1px solid rgba(255, 255, 255, 0.1)`,
  },
});
const SummaryLabel = styled("span", {
  base: {
    fontWeight: "bold",
    paddingLeft: "10px",
    display: "flex",
    alignItems: "center",
  },
});
const Count = styled("span", {
  base: {
    backgroundColor: themeContract.colors.background.quatenary,
    borderRadius: "12px",
    padding: "2px 8px",
  },
});
const FormLabel = styled("label", {
  base: {
    position: "relative",
  },
});
const ClearButton = styled("button", {
  base: {
    position: "absolute",
    right: "10px",
    top: "50%",
    transform: "translateY(-50%)",
    background: "none",
    color: "rgba(255, 255, 255, 0.5)",
    cursor: "pointer",
    outline: "none",
    border: "none",
  },
});

const Input = styled("input", {
  base: {
    padding: "15px 20px",
    width: "100%",
    color: themeContract.colors.color.primary,
    backgroundColor: themeContract.colors.background.primary,
    border: "none",
    outline: "none",
    boxSizing: "border-box",
  },
});

const Items = styled("ol", {
  base: {
    listStyle: "none",
    padding: "0",
    margin: "0",
    display: "flex",
    flexDirection: "column",
  },
});
const Item = styled("li", {
  base: {
    margin: "0",
    padding: "15px 50px 15px",
    color: "rgba(255, 255, 255, 0.5)",
    display: "flex",
    alignItems: "center",
    selectors: {
      "&:nth-child(odd)": {},
      "&:nth-child(even)": {
        backgroundColor: "rgba(255, 255, 255, 0.02)",
      },
      "&:hover": {
        backgroundColor: "rgba(255, 255, 255, 0.04)",
      },
    },
  },
});
const Inputs = styled("div", {
  base: {
    padding: "10px 0",
    display: "flex",
    gap: "10px",
    alignItems: "center",
  },
});
const [detailsOpen, setDetailsOpen] = createSignal(true);
const openDetails = () => {
  setDetailsOpen(true);
};
const closeDetails = () => {
  setDetailsOpen(false);
};
const Form = styled("form", {
  base: {
    width: "75%",
  },
});

const Icon = styled("span", {
  base: {
    marginRight: "10px",
    color: "rgba(255, 255, 255, 0.1)",
    display: "inline-block",
  },
});
const [isDark, setIsDark] = createSignal(true);

console.log(
  window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches,
);
const inputHandler = (e: Event) => {
  const target = e.target as HTMLInputElement;
  setFilter(target.value);
};
const resetHandler = (e: Event) => {
  e.preventDefault();
  setFilter("");
};
const [filter, setFilter] = createSignal("");

export function App() {
  return (
    <main>
      <URL class={isDark() ? darkTheme : lightTheme}>
        https://www.something.com
      </URL>

      <Inputs>
        <Menu class={darkTheme}>
          <Button onClick={openDetails}>Expand All</Button>
          <Button onClick={closeDetails}>Collapse All</Button>
        </Menu>
        <Form>
          <FormLabel>
            <Input
              class={darkTheme}
              type="text"
              placeholder="Filter entries..."
              onInput={inputHandler}
              value={filter()}
            />
            <ClearButton onClick={resetHandler}>
              <AiOutlineClose />
            </ClearButton>
          </FormLabel>
        </Form>
      </Inputs>
      <For each={arr} fallback={<div>loading...</div>}>
        {(entry, i) => (
          <Details class={darkTheme} open={detailsOpen()}>
            <Summary>
              <SummaryLabel>
                <Icon>
                  <AiFillCaretDown />
                </Icon>
                {i() + 1}. {entry.type}
              </SummaryLabel>
              <Count>{entry.entries.length}</Count>
            </Summary>
            <For each={entry.entries.filter((l) => l.includes(filter()))}>
              {(item) => (
                <Items>
                  <Item>
                    <Icon>
                      <OcDotfill2 />
                    </Icon>
                    {item}
                  </Item>
                </Items>
              )}
            </For>
          </Details>
        )}
      </For>
    </main>
  );
}
