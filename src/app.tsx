import {
  createSignal,
  createEffect,
  For,
  Component,
  onMount,
  batch,
} from "solid-js";
import {
  globalStyle,
  createThemeContract,
  createTheme,
} from "@macaron-css/core";

import { CSPLens } from "./components/layouts/CSPLens/CSPLens";
import { BackToTop } from "./components/ui/BackToTop/BackToTop";
import { Reload } from "./components/ui/Reload/Reload";
import { Support } from "./components/layouts/Support/Support";

import { styled } from "@macaron-css/solid";
interface IDirectives {
  type: string;
  entries: string[];
}
export const App: Component = () => {
  const [directives, setDirectives] = createSignal<IDirectives[]>([]);
  const [isDark, setIsDark] = createSignal(true);
  const [address, setAddress] = createSignal("");
  const [status, setStatus] = createSignal("default");
  const [isLocked, setIsLocked] = createSignal(false);
  const [singleColumn, setSingleColumn] = createSignal(false);

  //Column specific signals
  const [column1IsLocked, setColumn1IsLocked] = createSignal(false);
  const [column2IsLocked, setColumn2IsLocked] = createSignal(false);
  const [column1Address, setColumn1Address] = createSignal(address());
  const [column2Address, setColumn2Address] = createSignal(address());
  const [column1Status, setColumn1Status] = createSignal(status());
  const [column2Status, setColumn2Status] = createSignal(status());
  const [column1Directives, setColumn1Directives] =
    createSignal<IDirectives[]>(directives());
  const [column2Directives, setColumn2Directives] =
    createSignal<IDirectives[]>(directives());

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
    margin: 0,
    padding: 0,
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

  createEffect(() => {
    const newAddress = address();
    const newDirectives = directives();
    const newStatus = status();

    if (singleColumn()) {
      // Only one column is visible, so it always tracks the live page.
      if (!column1IsLocked()) {
        setColumn1Address(newAddress);
        setColumn1Directives(newDirectives);
        setColumn1Status(newStatus);
      }
      return;
    }

    // Two columns are visible: stagger them so column2 always tracks the
    // live page, and column1 keeps whatever column2 held before this page
    // loaded — i.e. column1 shows the previous page, column2 the current one.
    if (!column2IsLocked() && newAddress !== column2Address()) {
      if (!column1IsLocked()) {
        setColumn1Address(column2Address());
        setColumn1Directives(column2Directives());
        setColumn1Status(column2Status());
      }
      setColumn2Address(newAddress);
      setColumn2Directives(newDirectives);
      setColumn2Status(newStatus);
    }
  });
  onMount(() => {
    if (window) {
      // Detect system dark mode preference
      const darkModeMediaQuery = window.matchMedia(
        "(prefers-color-scheme: dark)",
      );
      setIsDark(darkModeMediaQuery.matches);
      darkModeMediaQuery.addEventListener("change", (event) => {
        setIsDark(event.matches);
      });
      // Detect width
      const minWidthMediaQuery = window.matchMedia("(min-width: 768px)");
      setSingleColumn(!minWidthMediaQuery.matches);
      minWidthMediaQuery.addEventListener("change", (event) => {
        setSingleColumn(!event.matches);
      });
    }
  });

  if (typeof chrome !== "undefined" && chrome.runtime) {
    const port = chrome.runtime.connect({ name: "CSP_LENS_PORT" });

    port.onMessage.addListener((request) => {
      if (request.type === "CSP_DATA_FROM_BACKGROUND") {
        batch(() => {
          setDirectives(request.payload.directives);
          setAddress(request.payload.address);
          setStatus(request.payload.status);
        });
      }
    });

    port.postMessage({ type: "CSP_LENS_CONNECTED" });
  }

  const MainStyled = styled("main", {
    base: {
      paddingBottom: "30px",
      gap: "20px",
      display: "flex",
    },
  });
  return (
    <>
      <Reload isDark={isDark} />
      <MainStyled>
        <CSPLens
          isDark={isDark}
          status={column1Status}
          directives={column1Directives}
          address={column1Address}
          isLocked={column1IsLocked}
          setIsLocked={setColumn1IsLocked}
        />

        {!singleColumn() && (
          <CSPLens
            isDark={isDark}
            status={column2Status}
            directives={column2Directives}
            address={column2Address}
            isLocked={column2IsLocked}
            setIsLocked={setColumn2IsLocked}
          />
        )}
      </MainStyled>
      <Support isDark={isDark} status={status} />
      {(column1Status() === "ok" || column2Status() === "ok") && (
        <BackToTop isDark={isDark} />
      )}
    </>
  );
};
