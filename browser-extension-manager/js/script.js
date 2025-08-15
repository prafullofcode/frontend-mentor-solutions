loadData();
function toggle(element) {
  element.classList.toggle("active");
}

let buttons = document.querySelectorAll(".button_hero");
let activeButton = null;
buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => {
      btn.classList.remove("active");
    });
    button.classList.add("active");
    activeButton = index;
    console.log(activeButton);
    if (activeButton == 0) loadData();
    else if (activeButton == 1) loadActive();
    else loadInactive();
  });
});
