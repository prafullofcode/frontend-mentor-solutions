const toggleButton = document.querySelector(".toggle-mode-button");

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  document.body.classList.toggle("dark");

  toggleButton.classList.toggle("dark");
});
