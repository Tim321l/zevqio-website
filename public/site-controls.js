const root = document.documentElement;

let currentTheme;
try {
  const storedTheme = localStorage.getItem("zevqio-theme");
  currentTheme =
    storedTheme === "light" || storedTheme === "dark"
      ? storedTheme
      : matchMedia("(prefers-color-scheme: light)").matches
        ? "light"
        : "dark";
} catch {
  currentTheme = matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
}

root.dataset.theme = currentTheme;

const setTheme = (theme, persist = false) => {
  currentTheme = theme;
  root.dataset.theme = theme;

  const themeButton = document.querySelector("[data-theme-toggle]");
  if (themeButton) {
    themeButton.setAttribute(
      "aria-label",
      theme === "dark" ? "Switch to light theme" : "Switch to dark theme",
    );
    themeButton.setAttribute("aria-pressed", String(theme === "light"));
    const darkIcon = themeButton.querySelector("[data-theme-icon-dark]");
    const lightIcon = themeButton.querySelector("[data-theme-icon-light]");
    if (darkIcon) darkIcon.hidden = theme === "light";
    if (lightIcon) lightIcon.hidden = theme === "dark";
  }

  if (persist) {
    try {
      localStorage.setItem("zevqio-theme", theme);
    } catch {
      // The theme remains active for this page when storage is unavailable.
    }
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector("[data-menu-toggle]");
  const navigation = document.querySelector("[data-navigation]");
  const openIcon = menuButton?.querySelector("[data-menu-icon]");
  const closeIcon = menuButton?.querySelector("[data-close-icon]");
  const themeButton = document.querySelector("[data-theme-toggle]");

  setTheme(currentTheme);

  menuButton?.addEventListener("click", () => {
    if (!navigation) return;
    const isOpen = menuButton.getAttribute("aria-expanded") !== "true";
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute(
      "aria-label",
      isOpen ? "Close navigation menu" : "Open navigation menu",
    );
    navigation.classList.toggle("is-open", isOpen);
    if (openIcon) openIcon.hidden = isOpen;
    if (closeIcon) closeIcon.hidden = !isOpen;
  });

  navigation?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      if (!menuButton || !navigation) return;
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open navigation menu");
      navigation.classList.remove("is-open");
      if (openIcon) openIcon.hidden = false;
      if (closeIcon) closeIcon.hidden = true;
    });
  });

  document.addEventListener("keydown", (event) => {
    if (
      event.key !== "Escape" ||
      !navigation ||
      !menuButton ||
      menuButton.getAttribute("aria-expanded") !== "true"
    ) {
      return;
    }
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation menu");
    navigation.classList.remove("is-open");
    if (openIcon) openIcon.hidden = false;
    if (closeIcon) closeIcon.hidden = true;
    menuButton.focus();
  });

  themeButton?.addEventListener("click", () => {
    setTheme(currentTheme === "dark" ? "light" : "dark", true);
  });
});
