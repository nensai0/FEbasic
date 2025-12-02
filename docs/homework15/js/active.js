function highlightActiveLink() {
  const links = document.querySelectorAll(".headers__link, .header__links");

  // /about.html → about.html
  const currentPath = window.location.pathname.split("/").pop() || "index.html";

  links.forEach((link) => {
    const href = link.getAttribute("href");
    if (!href || href === "#") return;

    const normalizedHref = href.replace(/^\.\//, "");

    if (normalizedHref === currentPath) {
      link.classList.add("active");
    }
  });
}