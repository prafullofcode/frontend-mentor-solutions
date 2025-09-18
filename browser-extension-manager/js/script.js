loadData();
function toggle(element) {
  e = element;

  element.classList.toggle("active");
  const clicked = parseInt(e.id);
  console.log(extensions[clicked]);
  // if (activeButton == 0) {
  if (e.classList.contains("active")) {
    extensions[clicked].isActive = true;
  } else {
    extensions[clicked].isActive = false;
  }
}

let buttons = document.querySelectorAll(".button_hero");
let activeButton = 0;
buttonClick();
function buttonClick() {
  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      buttons.forEach((btn) => {
        btn.classList.remove("active");
      });
      button.classList.add("active");
      activeButton = index;
      console.log(`Currently in menu  ${activeButton}`);
      if (activeButton == 0) loadData();
      else if (activeButton == 1) loadActive();
      else loadInactive();
    });
  });
}
