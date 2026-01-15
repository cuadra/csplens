function renderCSP(data) {
  const container = document.getElementById("csp-container");
  container.innerHTML = "";

  const directives = data ? data.directives : null;
  const url = data ? data.url : null;

  if (!directives || directives.length === 0) {
    const msg = document.createElement("div");
    msg.classList.add("no-csp-message");
    msg.textContent = "No Content Security Policy (CSP) found. Reload page.";
    container.appendChild(msg);
    return;
  }

  if (url) {
    const urlDiv = document.createElement("div");
    urlDiv.classList.add("page-url");
    urlDiv.textContent = url;
    container.appendChild(urlDiv);
  }

  const searchFieldLabel = document.createElement("label");
  const searchField = document.createElement("input");
  searchField.type = "text";
  searchField.placeholder = "Search directives...";

  searchFieldLabel.appendChild(searchField);

  container.appendChild(searchFieldLabel);

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
    //details.setAttribute("open", "");
    const typeItem = document.createElement("summary");

    const typeText = document.createElement("span");
    typeText.classList.add("directive-type");
    typeText.textContent = `${i + 1}. ${directive.type}`;
    typeItem.appendChild(typeText);

    const entriesList = document.createElement("ol");

    const directiveCount = directive.entries.length;
    const countSpan = document.createElement("span");
    countSpan.classList.add("directive-count");
    countSpan.textContent = directiveCount;
    typeItem.appendChild(countSpan);

    details.appendChild(typeItem);

    directive.entries.forEach((entry) => {
      const listItem = document.createElement("li");
      listItem.textContent = entry;
      entriesList.appendChild(listItem);
    });

    details.appendChild(entriesList);

    directiveList.appendChild(details);
  });
  container.appendChild(directiveList);
  window.scrollTo(0, 0);
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === "DATA_FROM_BACKGROUND") {
    renderCSP(request.payload);
  }
});

chrome.runtime.sendMessage({ type: "GET_CURRENT_TAB_CSP" }, (response) => {
  if (response && response.payload) {
    renderCSP(response.payload);
  } else {
    renderCSP(null);
  }
});
