chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  //console.log("Message received in side panel:", request, request.payload);
  if (request.type === "DATA_FROM_BACKGROUND") {
    const directives = request.payload;

    const test = document.querySelector(".directives");
    if (test) {
      test.remove();
    }
    const directiveList = document.createElement("div");
    directiveList.classList.add("directives");

    const openAllButton = document.createElement("button");
    openAllButton.textContent = "Open All";
    openAllButton.addEventListener("click", () => {
      const detailsElements = directiveList.querySelectorAll("details");
      detailsElements.forEach((details) => {
        details.setAttribute("open", "");
      });
    });
    directiveList.appendChild(openAllButton);

    const closeAllButton = document.createElement("button");
    closeAllButton.textContent = "Close All";
    closeAllButton.addEventListener("click", () => {
      const detailsElements = directiveList.querySelectorAll("details");
      detailsElements.forEach((details) => {
        details.removeAttribute("open");
      });
    });
    directiveList.appendChild(closeAllButton);

    directives.forEach((directive, i) => {
      const details = document.createElement("details");
      details.setAttribute("open", "");
      const typeItem = document.createElement("summary");
      typeItem.textContent = `${i + 1}. ${directive.type}`;
      details.appendChild(typeItem);

      const entriesList = document.createElement("ol");

      const directiveCount = directive.entries.length;
      const countSpan = document.createElement("span");
      countSpan.textContent = directiveCount;
      typeItem.appendChild(countSpan);

      directive.entries.forEach((entry) => {
        const listItem = document.createElement("li");
        listItem.textContent = entry;
        entriesList.appendChild(listItem);
      });

      details.appendChild(entriesList);

      directiveList.appendChild(details);
    });
    document.body.appendChild(directiveList);
  }
});
