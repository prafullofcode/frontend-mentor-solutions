function validateFile() {
  const errorContainer = document.querySelector("#file-error");
  const errorText = errorContainer.querySelector("p");
  const normalSvg = errorContainer.querySelector("#normal-svg");
  const errorSvg = errorContainer.querySelector("#error-svg");

  const maxSize = 500 * 1024; // 500 KB
  const allowedTypes = ["image/jpeg", "image/png", "image/webp"];

  // Reset to normal first
  errorText.style.color = "";
  normalSvg.style.display = "block";
  errorSvg.style.display = "none";

  // No file selected
  if (!inputFile.files || inputFile.files.length === 0) {
    errorText.textContent = "Please select a file.";
    errorText.style.color = "var(--orange-700)";
    normalSvg.style.display = "none";
    errorSvg.style.display = "block";
    return false;
  }

  const file = inputFile.files[0];

  // File too large
  if (file.size > maxSize) {
    errorText.textContent = "File too large (max 500KB).";
    errorText.style.color = "var(--orange-700)";

    normalSvg.style.display = "none";
    errorSvg.style.display = "block";
    inputFile.value = "";
    return false;
  }

  // Invalid type
  if (!allowedTypes.includes(file.type)) {
    errorText.textContent = "Invalid file type (only JPG, PNG, WEBP).";
    errorText.style.color = "var(--orange-700)";

    normalSvg.style.display = "none";
    errorSvg.style.display = "block";
    inputFile.value = "";
    return false;
  }

  errorText.textContent = "File Approved";
  errorText.style.color = "";
  normalSvg.style.display = "block";
  errorSvg.style.display = "none";
  return true;
}

function validateName(name) {
  const inputName = document.querySelector(".input__fname");
  name = inputName;
  console.log("Validating Name");
  if (name.value == "") {
    show(nameError, "Required");
    return false;
  } else if (!name.value.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    show(nameError, "Invalid Full Name");
    return false;
  } else {
    removeError(nameError);
    return true;
  }
}

function validateEmail(email) {
  const inputEmail = document.querySelector(".input__email");

  email = inputEmail;
  if (email.value == "") {
    show(emailError, "Required");
    return false;
  } else if (!email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    show(emailError, "Invalid Email Format");
    return false;
  } else {
    removeError(emailError);
    return true;
  }
}

function validateGitUsername(gitName) {
  const inputGithub = document.querySelector(".input__git_username");
  gitName = inputGithub;
  if (gitName.value == "") {
    show(gitError, "Required");
    return false;
  } else if (!gitName.value.match(/^@/)) {
    show(gitError, "Username must start with @");
    return false;
  } else {
    removeError(gitError);
    return true;
  }
}
