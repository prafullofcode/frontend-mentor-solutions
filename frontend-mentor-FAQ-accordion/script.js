toggleDisplay(1);

for (let i = 1; i <= 4; i++) {
  let qsnContainer = document.querySelector(`.qsn-container-${i}`);
  qsnContainer.addEventListener("click", function () {
    let answer = document.querySelector(`.ans-${i}`);
    if (answer.classList.contains("show")) {
      deactiveAll();
    } else {
      deactiveAll();
      toggleDisplay(i);
    }
  });
}

function toggleDisplay(i) {
  let plusIcon = document.querySelector(`.plus-icon-${i}`);
  let minusIcon = document.querySelector(`.minus-icon-${i}`);
  let answer = document.querySelector(`.ans-${i}`);

  minusIcon.classList.toggle("hidden");
  plusIcon.classList.toggle("hidden");
  answer.classList.toggle("show");
}

function deactiveAll() {
  for (let i = 1; i <= 4; i++) {
    let answer = document.querySelector(`.ans-${i}`);
    answer.classList.remove("show");

    let plusIcon = document.querySelector(`.plus-icon-${i}`);
    let minusIcon = document.querySelector(`.minus-icon-${i}`);
    minusIcon.classList.add("hidden");
    plusIcon.classList.remove("hidden");
  }
}
