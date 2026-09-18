const toggleButton = document.getElementById("theme-toggle");

toggleButton.addEventListener("click", () => {
  const isDark = document.body.dataset.theme === "dark";

  if (isDark) {
    delete document.body.dataset.theme;
    toggleButton.textContent = "🌙 Dark";
  } else {
    document.body.dataset.theme = "dark";
    toggleButton.textContent = "☀️ Light";
  }
});