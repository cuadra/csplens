chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === "DATA_FROM_BACKGROUND") {
    const directives = request.payload;

    const test = document.querySelector(".directives");
    if (test) {
      test.remove();
    }
    const directiveList = document.createElement("div");
    directiveList.classList.add("directives");

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");

    const openAllButton = document.createElement("button");
    openAllButton.textContent = "Expand All";
    openAllButton.classList.add("btn-link");
    openAllButton.addEventListener("click", () => {
      const detailsElements = directiveList.querySelectorAll("details");
      detailsElements.forEach((details) => {
        details.setAttribute("open", "");
      });
    });
    buttonContainer.appendChild(openAllButton);

    const closeAllButton = document.createElement("button");
    closeAllButton.textContent = "Collapse All";
    closeAllButton.classList.add("btn-link");
    closeAllButton.addEventListener("click", () => {
      const detailsElements = directiveList.querySelectorAll("details");
      detailsElements.forEach((details) => {
        details.removeAttribute("open");
      });
    });
    buttonContainer.appendChild(closeAllButton);

    directiveList.appendChild(buttonContainer);

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
