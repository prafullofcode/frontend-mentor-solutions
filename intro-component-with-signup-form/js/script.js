const form = document.getElementById("form");

const fnameErrorMessage = document.getElementById("fname-error");
const lnameErrorMessage = document.getElementById("lname-error");
const emailErrorMessage = document.getElementById("email-error");
const pwErrorMessage = document.getElementById("pw-error");

const fNameField = document.getElementById("first-name-input");
const lNameField = document.getElementById("last-name-input");
const emailField = document.getElementById("email-input");
const passwordField = document.getElementById("password-input");

form.addEventListener("submit", validateForm);

function validateForm(event) {
  let valid = true;
  resetErrorIcons();
  resetErrorMessage();

  if (fNameField.value === "") {
    displayErrorMessage(fnameErrorMessage);
    fnameErrorMessage.parentElement.classList.add("error");
    valid = false;
  }

  if (lNameField.value === "") {
    displayErrorMessage(lnameErrorMessage);

    lnameErrorMessage.parentElement.classList.add("error");
    valid = false;
  }

  let email = emailField.value;
  if (email === "") {
    messageToDisplay(emailErrorMessage, "Email can't be empty");
    emailErrorMessage.parentElement.classList.add("error");
    displayErrorMessage(emailErrorMessage);

    valid = false;
  } else if (
    !email.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/)
  ) {
    messageToDisplay(emailErrorMessage, "Looks like this is not an email");
    emailErrorMessage.parentElement.classList.add("error");
    displayErrorMessage(emailErrorMessage);

    valid = false;
  }

  if (passwordField.value === "") {
    pwErrorMessage.parentElement.classList.add("error");
    displayErrorMessage(pwErrorMessage);

    valid = false;
  }

  if (valid) {
    form.reset();
    alert("Submitted successfully");
  }
}

function resetErrorIcons() {
  fnameErrorMessage.parentElement.classList.remove("error");
  lnameErrorMessage.parentElement.classList.remove("error");
  pwErrorMessage.parentElement.classList.remove("error");
  emailErrorMessage.parentElement.classList.remove("error");
}

function resetErrorMessage() {
  fnameErrorMessage.style.display = "none";
  lnameErrorMessage.style.display = "none";
  emailErrorMessage.style.display = "none";
  pwErrorMessage.style.display = "none";
}

function displayErrorMessage(element) {
  element.style.display = "block";
}

function messageToDisplay(element, message) {
  element.textContent = message;
}
