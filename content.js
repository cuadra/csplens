document.addEventListener("DOMContentLoaded", () => {
  console.log("Content script loaded and running.");
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "dataFromBackground") {
      console.log("Received data from background:", message.data);
      // You can process the data here or perform actions based on it.
      // If you need to send a response back:
      // sendResponse({ status: "Data received successfully!" });
    }
  });
  chrome.runtime.sendMessage({ action: "contentScriptLoaded" });
});
