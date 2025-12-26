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

      chrome.runtime.sendMessage({
        type: "DATA_FROM_BACKGROUND",
        payload: cspEntries,
      });
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
  }
});

chrome.sidePanel
  .setPanelBehavior({ openPanelOnActionClick: true })
  .catch((error) => console.error(error));
