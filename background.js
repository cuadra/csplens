const cspCache = {};

chrome.webRequest.onHeadersReceived.addListener(
  (details) => {
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

      //console.log("CSP for:", cspEntries);
      const cspData = {
        directives: cspEntries,
        url: details.url,
      };
      cspCache[details.tabId] = cspData;

      chrome.runtime.sendMessage({
        type: "DATA_FROM_BACKGROUND",
        payload: cspData,
      });
    } else {
      delete cspCache[details.tabId];
    }
    /*
     */
  },
  { urls: ["<all_urls>"] },
  ["responseHeaders"],
);

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  //console.log("///////////////");
  if (message.action === "contentScriptLoaded") {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {
        action: "dataFromBackground",
        data: "Hello from background!",
      });
    });
  } else if (message.type === "GET_CURRENT_TAB_CSP") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs.length === 0) {
        sendResponse({ payload: null });
        return;
      }
      const tabId = tabs[0].id;
      const data = cspCache[tabId];
      sendResponse({ payload: data });
    });
    return true; // Keep channel open for async response
  }
});

chrome.tabs.onRemoved.addListener((tabId) => {
  delete cspCache[tabId];
});

chrome.sidePanel
  .setPanelBehavior({ openPanelOnActionClick: true })
  .catch((error) => console.error(error));
