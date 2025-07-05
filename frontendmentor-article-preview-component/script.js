const shareButton = document.querySelector(".share-container");
const activeStateShareContainer = document.querySelector(
  ".active-state-share-popup"
);
const mobileActiveStateShareContainer = document.querySelector(
  ".active-state-mobile"
);
const footer = document.querySelector(".content-footer");
const author = document.querySelector(".author");
const shareContainer = document.querySelector(".share-container");

shareButton.addEventListener("click", function () {
  activeStateShareContainer.classList.toggle("show");

  if (window.innerWidth <= 800) {
    author.classList.toggle("hidden");
    shareContainer.classList.toggle("share-container-mobile");
    mobileActiveStateShareContainer.classList.toggle("show");
    footer.classList.toggle("content-footer-active");
  }
});

document.addEventListener("click", function (event) {
  if (
    !shareButton.contains(event.target) &&
    !activeStateShareContainer.contains(event.target)
  ) {
    activeStateShareContainer.classList.remove("show");
    mobileActiveStateShareContainer.classList.remove("show");
    author.classList.remove("hidden");
    shareContainer.classList.remove("share-container-mobile");
    footer.classList.remove("content-footer-active");
  }
});
