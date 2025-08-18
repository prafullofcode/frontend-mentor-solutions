// Select the toggle button
let darkToggle = false;
const toggleButton = document.querySelector(".toggle-mode-button");
toggleButton.addEventListener("click", () => {
  if (darkToggle == false) {
    darkToggle = true;
    removeData();
    loadData();
    darken();
  } else {
    darkToggle = false;
    lighten();
  }
});

function darken() {
  const darkenElements = document.querySelectorAll(".darken");
  darkenElements.forEach((el) => {
    el.classList.add("dark");
  });
}

function lighten() {
  const darkenElements = document.querySelectorAll(".darken");
  darkenElements.forEach((el) => {
    el.classList.remove("dark");
  });
}
