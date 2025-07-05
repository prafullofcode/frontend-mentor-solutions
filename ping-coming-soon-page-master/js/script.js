function validateEmail() {
  event.preventDefault();
  const emailField = document.querySelector("#email_input");

  let errorPopup;
  if (window.innerWidth < 767) {
    errorPopup = document.querySelector(".error-mobile");
  } else {
    errorPopup = document.querySelector(".error-desktop");
  }

  const email = emailField.value;

  if (isValidEmail(email)) {
    resetField(emailField);
    correctEmail(errorPopup, emailField);
  } else {
    errorEmail(errorPopup, emailField);
  }
}

function resetField(field) {
  field.value = "";
  alert("Submitted Successfully");
}
function isValidEmail(email) {
  return email.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/);
}

function errorEmail(errorPopup, emailField) {
  emailField.classList.add("error-email-box");

  errorPopup.classList.remove("hidden");
}

function correctEmail(errorPopup, emailField) {
  emailField.classList.remove("error-email-box");
  errorPopup.classList.add("hidden");
}
