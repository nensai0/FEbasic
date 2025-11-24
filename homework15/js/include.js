async function includeHTML() {
  // HEADER
  const headerContainer = document.querySelector("[data-include='header_white'], [data-include='header_dark']");
  if (headerContainer) {
    const file =
      headerContainer.getAttribute("data-include") === "header_white"
        ? "header_white.html"
        : "header_dark.html";

    const header = await fetch(file);
    headerContainer.innerHTML = await header.text();
  }

  // FOOTER
  const footerContainer = document.querySelector("[data-include='footer']");
  if (footerContainer) {
    const footer = await fetch("footer.html");
    footerContainer.innerHTML = await footer.text();
  }
}

includeHTML();