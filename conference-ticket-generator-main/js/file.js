const dropArea = document.querySelector(".file-upload-container");
const imageView = document.querySelector("#img-view");
const buttons = document.querySelector("#img-control-buttons");
const avatar = document.querySelector("#avatar");
const removeButton = document.querySelector("#remove-pic-button");
const changeButton = document.querySelector("#change-pic-button");
const r1 = document.querySelector(".remove1");
const r2 = document.querySelector(".remove2");
buttons.style.display = "none";

inputFile.addEventListener("change", uploadImage);
inputFile.addEventListener("dragover", function (e) {
  e.preventDefault();
});

inputFile.addEventListener("drop", function (e) {
  e.preventDefault();
  inputFile.files = e.dataTransfer.files;
  uploadImage();
});

removeButton.addEventListener("click", () => {
  show(fileError, "Upload your photo (JPG or PNG, max size: 500KB)");
  inputFile.value = "";
  inputFile.style.display = "flex";
  buttons.style.display = "none";
  r1.style.opacity = "1";
  imageView.style.backgroundImage = "none";
  r2.style.opacity = "1";
  validateFile();
});

changeButton.addEventListener("click", () => {
  uploadImage();
  inputFile.click();
  validateFile();
});
function uploadImage() {
  const file = inputFile.files[0];
  if (!file) return;

  const imageLink = URL.createObjectURL(file);
  imageView.style.display = "flex";
  imageView.style.backgroundImage = `url(${imageLink})`;
  avatar.src = imageLink;
  inputFile.style.display = "none";
  removeInsideImgView();
  validateFile();
}

function removeInsideImgView() {
  if (r1) r1.style.opacity = "0";
  if (r2) r2.style.opacity = "0";
  if (buttons) buttons.style.display = "block";
}
