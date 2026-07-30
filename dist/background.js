const cspCacheByTab = new Map();
let panelPort = null;
let activeTabId = null;

const defaultData = { status: "default", address: "", directives: [] };

const sendDataToSidePanel = (data) => {
  if (!panelPort) {
    return;
  }
  panelPort.postMessage({
    type: "CSP_DATA_FROM_BACKGROUND",
    payload: data,
  });
};

const sendActiveTabData = () => {
  if (activeTabId == null) {
    return;
  }
  sendDataToSidePanel(cspCacheByTab.get(activeTabId) ?? defaultData);
};

chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
  if (tabs[0]?.id != null) {
    activeTabId = tabs[0].id;
  }
});

chrome.runtime.onConnect.addListener((port) => {
  if (port.name !== "CSP_LENS_PORT") {
    return;
  }

  panelPort = port;
  sendActiveTabData();

  port.onDisconnect.addListener(() => {
    if (panelPort === port) {
      panelPort = null;
    }
  });
});

chrome.tabs.onActivated.addListener(({ tabId }) => {
  activeTabId = tabId;
  sendActiveTabData();
});

chrome.windows.onFocusChanged.addListener(async (windowId) => {
  if (windowId === chrome.windows.WINDOW_ID_NONE) {
    return;
  }
  const [tab] = await chrome.tabs.query({ active: true, windowId });
  if (tab?.id != null) {
    activeTabId = tab.id;
    sendActiveTabData();
  }
});

chrome.tabs.onRemoved.addListener((tabId) => {
  cspCacheByTab.delete(tabId);
});

chrome.webRequest.onHeadersReceived.addListener(
  (details) => {
    if (details.type !== "main_frame" || details.tabId < 0) {
      return;
    }

    const cspEntries = [];
    const cspHeader = details.responseHeaders.find(
      (header) => header.name.toLowerCase() === "content-security-policy",
    );

    let cspData;
    if (cspHeader) {
      const cspArray = cspHeader.value
        .split(";")
        .map((directive) => directive.trim());

      cspArray.sort().forEach((directive) => {
        if (!directive) {
          return;
        }
        const entries = directive.split(" ").filter((entry) => entry);
        const label = entries.shift();
        const obj = {
          type: label,
          entries: entries.sort(),
        };
        cspEntries.push(obj);
      });

      cspData = {
        directives: cspEntries,
        address: details.url,
        status: cspEntries.length > 0 ? "ok" : "empty",
      };
    } else {
      cspData = {
        status: "not_found",
        address: details.url,
        directives: [],
      };
    }

    cspCacheByTab.set(details.tabId, cspData);
    if (details.tabId === activeTabId) {
      sendDataToSidePanel(cspData);
    }
  },
  { urls: ["<all_urls>"] },
  ["responseHeaders"],
);

chrome.sidePanel
  .setPanelBehavior({ openPanelOnActionClick: true })
  .catch((error) => console.error(error));
