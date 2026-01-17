import { createSignal, createEffect, For, Component, onMount } from "solid-js";
import {
  globalStyle,
  createThemeContract,
  createTheme,
} from "@macaron-css/core";
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
/*
const D = [
  {
    type: "connect-src",
    entries: [
      "https://api.example.com",
      "https://cdn.example.com",
      "wss://socket.example.com",
    ],
  },
];

*/
export const App: Component = () => {
  const [directives, setDirectives] = createSignal<IDirectives[]>([]);
  const [detailsOpen, setDetailsOpen] = createSignal(true);
  const [isDark, setIsDark] = createSignal(true);
  const [address, setAddress] = createSignal("");
  const [status, setStatus] = createSignal("");
  const [filter, setFilter] = createSignal("");

  const vars = createThemeContract({
    color: {
      background: null,
    },
  });

  const lTheme = createTheme(vars, {
    color: {
      background: "#ffffff",
    },
  });
  const dTheme = createTheme(vars, {
    color: {
      background: "#202127",
    },
  });

  globalStyle("body", {
    backgroundColor: vars.color.background,
  });

  createEffect(() => {
    document.querySelector("body")?.classList.toggle(dTheme, isDark());
    document.querySelector("body")?.classList.toggle(lTheme, !isDark());
  });

  createEffect(() => {
    if (address()) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });
  onMount(() => {
    if (window) {
      const darkModeMediaQuery = window.matchMedia(
        "(prefers-color-scheme: dark)",
      );

      console.log(
        "Dark mode media query supported",
        darkModeMediaQuery.matches,
      );
      setIsDark(darkModeMediaQuery.matches);

      darkModeMediaQuery.addEventListener("change", (event) => {
        console.log("Dark mode preference changed:", event.matches);
        setIsDark(event.matches);
      });
    }
  });

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
      <Message isDark={isDark} status={status} />
      {Array.isArray(directives()) && directives().length > 0 && (
        <>
          <U isDark={isDark} address={address} />
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
      {status() !== "not_found" && status() !== "" && (
        <BackToTop theme={isDark() ? darkTheme : lightTheme} />
      )}
    </main>
  );
};
