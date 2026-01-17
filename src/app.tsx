import { createSignal, createEffect, For, Component } from "solid-js";
import { globalStyle } from "@macaron-css/core";
import { Message } from "./components/layouts/Message/Message";
import { BackToTop } from "./components/ui/BackToTop/BackToTop";

import { Details } from "./components/ui/Details/Details";
import { Inputs } from "./components/ui/Inputs/Inputs";
import { U } from "./components/ui/URL/URL";
import { darkTheme } from "./styles/themes/dark";
import { lightTheme } from "./styles/themes/light";

interface IDirectives {
  type: string;
  entries: string[];
}

export const App: Component = () => {
  let darkMode = true;

  if (window.matchMedia) {
    darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  globalStyle("body", {
    backgroundColor: darkMode ? "#202127" : "#CCC",
  });

  const [directives, setDirectives] = createSignal<IDirectives[]>([]);
  const [detailsOpen, setDetailsOpen] = createSignal(true);
  const [isDark, setIsDark] = createSignal(darkMode);
  const [address, setAddress] = createSignal("");
  const [status, setStatus] = createSignal("");
  const [filter, setFilter] = createSignal("");

  if (typeof chrome !== "undefined" && chrome.runtime) {
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
      if (request.type === "DATA_FROM_BACKGROUND") {
        console.log("Received data from background:", request.payload.address);
        setDirectives(request.payload.directives);
        setAddress(request.payload.address);
        setStatus(request.payload.status);
      }
    });
  }
  return (
    <main>
      <Message theme={isDark() ? darkTheme : lightTheme} status={status} />
      {Array.isArray(directives()) && directives().length > 0 && (
        <>
          <U theme={isDark() ? darkTheme : lightTheme} address={address} />
          <Inputs
            filter={filter()}
            setFilter={setFilter}
            setDetailsOpen={setDetailsOpen}
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
      {status() !== "not_found" ||
        (status() !== "" && (
          <BackToTop theme={isDark() ? darkTheme : lightTheme} />
        ))}
    </main>
  );
};
