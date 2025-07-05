function validateEmail() {
  const emailField =
    window.innerWidth >= 558
      ? document.getElementById("email-input-desktop")
      : document.getElementById("email-input");
  const emailContainer = emailField.parentElement;
  const email = emailField.value;

  if (!isValidEmail(email)) {
    errorEmail(emailContainer, emailField);
  } else {
    correctEmail(emailContainer, emailField);
  }
}

function validateOnClick() {
  const emailField =
    window.innerWidth >= 558
      ? document.getElementById("email-input-desktop")
      : document.getElementById("email-input");
  const emailContainer = emailField.parentElement;
  email = emailField.value;
  if (!isValidEmail(email)) {
    errorEmail(emailContainer, emailField);
  } else {
    resetInputField(emailField);
    validatedMessage(emailContainer);
  }
}

function resetInputField(field) {
  field.value = "";
  field.style.border = "1px solid var(--desaturated-red)";
}

function errorEmail(emailContainer, emailField) {
  emailContainer.classList.add("error");
  emailField.style.border = "1px solid red";
  emailField.style.borderRight = "0";
}

function correctEmail(emailContainer, emailField) {
  emailContainer.classList.remove("error");
  emailField.style.border = "1px solid green";
  emailField.style.borderRight = "0";
}

function isValidEmail(email) {
  return email.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/);
}

function validatedMessage(emailContainer) {
  emailContainer.classList.add("valid");

  setTimeout(() => {
    emailContainer.classList.remove("valid");
  }, 2000);
}
