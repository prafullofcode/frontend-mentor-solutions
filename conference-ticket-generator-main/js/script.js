const form = document.querySelector(".form-container form");
const formContainer = document.querySelector(".form-container");
const ticketContainer = document.querySelector(".ticket-container");

const inputFile = document.querySelector(".input__file");
const inputName = document.querySelector(".input__fname");
const inputEmail = document.querySelector(".input__email");
const inputGithub = document.querySelector(".input__git_username");

const ticketHero = document.querySelector(".hero-text span");
const ticketName = document.querySelector(".name");
const ticketUsername = document.querySelector(".gitUsername");
const ticketNumber = document.querySelector(".ticket-number");

const ticketEmail = document.querySelector(".hero-par span");
const normalSVG = document.querySelector("#normal-svg");
const errorSVG = document.querySelector("#error-svg");
const fileError = document.querySelector("#file-error");
const nameError = document.querySelector("#name-error");
const emailError = document.querySelector("#email-error");
const gitError = document.querySelector("#git-username-error");

document.addEventListener("DOMContentLoaded", () => {
  errorSVG.style.display = "none";
  ticketContainer.style.display = "none";

  resetErrors();
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(validateEmail(inputEmail));
    resetErrors();
    validateName(inputName);
    validateEmail(inputEmail);
    validateGitUsername(inputGithub);
  });
});

function resetErrors() {
  nameError.style.display = "none";
  emailError.style.display = "none";
  gitError.style.display = "none";

  nameError.style.color = "var(--orange-700)";
  emailError.style.color = "var(--orange-700)";
  gitError.style.color = "var(--orange-700)";
}

function removeError(error) {
  error.style.display = "none";
}
function show(el, text) {
  el.style.display = "flex";
  const child = el.querySelector("p");
  child.innerHTML = text;
}
const generateButton = document.querySelector(".generate-button");

generateButton.addEventListener("click", () => {
  if (
    validateName(inputName) &&
    validateEmail(inputEmail) &&
    validateGitUsername(inputGithub) &&
    validateFile()
  ) {
    formContainer.style.display = "none";
    ticketContainer.style.display = "flex";
    ticketHero.innerHTML = inputName.value;
    ticketEmail.innerHTML = inputEmail.value;
    ticketName.innerHTML = inputName.value;
    ticketUsername.innerHTML = inputGithub.value;
    generateNumber();
    setTimeout(() => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }, 500);
  }
});

function generateNumber() {
  ticketNumber.textContent =
    "#" +
    Array.from({ length: 7 }, () => Math.floor(Math.random() * 10)).join("");
}
