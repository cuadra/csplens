let cspCache = null;
let panelPort = null;
const sendDataToSidePanel = (data) => {
  cspCache = data;
  if (!panelPort) {
    return;
  }
  panelPort.postMessage({
    type: "CSP_DATA_FROM_BACKGROUND",
    payload: data,
  });
};

chrome.runtime.onConnect.addListener((port) => {
  if (port.name !== "CSP_LENS_PORT") {
    return;
  }

  panelPort = port;

  // Send cached data if available
  if (cspCache) {
    sendDataToSidePanel(cspCache);
    cspCache = null;
  }

  port.onDisconnect.addListener(() => {
    if (panelPort === port) {
      panelPort = null;
    }
  });
});

chrome.webRequest.onHeadersReceived.addListener(
  async (details) => {
    const cspEntries = [];
    if (details.type !== "main_frame") {
      return;
    }

    const cspHeader = details.responseHeaders.find(
      (header) => header.name.toLowerCase() === "content-security-policy",
    );

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

      const cspData = {
        directives: cspEntries,
        address: details.url,
        status: cspEntries.length >= 0 ? "ok" : "empty",
      };

      sendDataToSidePanel(cspData);
    } else {
      const cspData = {
        status: "not_found",
        address: details.url,
        directives: [],
      };
      sendDataToSidePanel(cspData);
    }
  },
  { urls: ["<all_urls>"] },
  ["responseHeaders"],
);

chrome.sidePanel
  .setPanelBehavior({ openPanelOnActionClick: true })
  .catch((error) => console.error(error));
