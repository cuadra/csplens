import { createSignal, createEffect, For, Component } from "solid-js";
import { globalStyle } from "@macaron-css/core";
import { Message } from "./components/layouts/Message/Message";
import { Details } from "./components/ui/Details/Details";
import { Inputs } from "./components/ui/Inputs/Inputs";
import { URL } from "./components/ui/URL/URL";
import { darkTheme } from "./styles/themes/dark";
import { lightTheme } from "./styles/themes/light";

globalStyle("body", {
  backgroundColor: "#202127",
});

/*
const csp = {
  url: "https://www.google.com",
  directives: [
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
      entries: [
        "self",
        "styles.something.com",
        "fonts.something.com",
        "cdn.something.com",
        "themes.something.com",
        "assets.something.com",
        "static.something.com",
        "themes.something.com",
        "more-styles.something.com",
        "even-more-styles.something.com",
        "extra-styles.something.com",
        "additional-styles.something.com",
      ],
    },
  ],
};
*/

const [directives, setDirectives] = createSignal<IDirectives[]>([]);
const [detailsOpen, setDetailsOpen] = createSignal(true);
const openDetails = () => {
  setDetailsOpen(false); //reset
  setDetailsOpen(true);
};
const closeDetails = () => {
  setDetailsOpen(false);
};
const [isDark, setIsDark] = createSignal(true);

console.log(
  window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches,
);
const [filter, setFilter] = createSignal("");

if (typeof chrome !== "undefined" && chrome.runtime) {
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.type === "DATA_FROM_BACKGROUND") {
      setDirectives(request.payload.directives);
      //renderCSP(request.payload);
    }
  });
  /*
  chrome.runtime.sendMessage({ type: "GET_CURRENT_TAB_CSP" }, (response) => {
    if (response && response.payload) {
      setDirectives(response.payload.directives);
      //renderCSP(response.payload);
    } else {
      //renderCSP(null);
    }
  });
  */
}
interface IDirectives {
  type: string;
  entries: string[];
}

export const App: Component = () => {
  return (
    <main>
      <Message
        directives={directives()}
        theme={isDark() ? darkTheme : lightTheme}
      />
      {Array.isArray(directives()) && directives().length > 0 && (
        <>
          <URL
            theme={isDark() ? darkTheme : lightTheme}
            url={"https://google.com"}
          />
          <Inputs
            filter={filter()}
            setFilter={setFilter}
            openDetails={openDetails}
            closeDetails={closeDetails}
            theme={isDark() ? darkTheme : lightTheme}
          />
          <For each={directives()} fallback={<div>loading...</div>}>
            {(directive, i) => (
              <Details
                directive={directive}
                index={i()}
                filter={filter}
                detailsOpen={detailsOpen}
                theme={isDark() ? darkTheme : lightTheme}
              />
            )}
          </For>
        </>
      )}
    </main>
  );
};
