async function includeHTML() {
  // HEADER
  const headerContainer = document.querySelector(
    "[data-include='header_white'], [data-include='header_dark']"
  );

  if (headerContainer) {
    const file =
      headerContainer.getAttribute("data-include") === "header_white"
        ? "header_white.html"
        : "header_dark.html";

    const response = await fetch(file);
    headerContainer.innerHTML = await response.text();

    // ВАЖНО: вызываем функцию из active.js
    if (typeof highlightActiveLink === "function") {
      highlightActiveLink();
    }
  }

  // FOOTER
  const footerContainer = document.querySelector("[data-include='footer']");
  if (footerContainer) {
    const response = await fetch("footer.html");
    footerContainer.innerHTML = await response.text();
  }
}

includeHTML();