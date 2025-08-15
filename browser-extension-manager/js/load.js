function loadData() {
  fetch("data.json")
    .then((response) => response.json())
    .then((json) => {
      console.log("data loading......");
      let container = document.getElementById("blocks-container");
      removeData();
      json.extensions.forEach((extension) => {
        const active = extension.isActive ? "active" : " ";
        container.innerHTML += `
              <div class="block">
                <div class="block-top">
                  <img
                    src="${extension.logo}"
                    alt="${extension.name} logo"
                    class="extension-logo"
                    height="60"
                    width="60"
                  />
                  <div class="block__text">
                    <h3 class = "extension-name">${extension.name}</h3>
                    <p>${extension.description}</p>
                  </div>
                </div>
                <div class="block-bottom">
                  <div class="remove-button">Remove</div>
                  <div class="extension-toggle ${active}" onclick="toggle(this); changeData(this)">
                    <div class="circle"></div>
                  </div>
                </div>
              </div>
            `;
      });
    });
}

function changeData(element) {
  fetch("data.json")
    .then((response) => response.json())
    .then((json) => {
      let container = document.getElementById("blocks-container");
      const block = element.closest(".block");
      const h3 = block.querySelector("h3");

      json.extensions.forEach((extension) => {
        if (extension.name == h3.textContent.trim()) {
          if (element.classList.contains("active")) {
            extension.isActive = true;
          } else {
            extension.isActive = false;
          }
          console.log(`${extension.name} is now ${extension.isActive} `);
        }
      });
    });
}

function removeData() {
  let container = document.getElementById("blocks-container");
  container.innerHTML = " ";
}

function loadActive() {
  removeData();
  fetch("data.json")
    .then((response) => response.json())
    .then((json) => {
      console.log("active data loading...");
      let container = document.getElementById("blocks-container");
      json.extensions.forEach((extension) => {
        if (extension.isActive == true) {
          changeInnerHtml(container, extension, "active");
        }
      });
    });
}

function loadInactive() {
  removeData();
  fetch("data.json")
    .then((response) => response.json())
    .then((json) => {
      console.log("inactive data loading...");
      let container = document.getElementById("blocks-container");
      json.extensions.forEach((extension) => {
        if (extension.isActive == false) {
          changeInnerHtml(container, extension, " ");
        }
      });
    });
}

function changeInnerHtml(container, extension, mode) {
  container.innerHTML += `
              <div class="block">
                <div class="block-top">
                  <img
                    src="${extension.logo}"
                    alt="${extension.name} logo"
                    class="extension-logo"
                    height="60"
                    width="60"
                  />
                  <div class="block__text">
                    <h3 class = "extension-name">${extension.name}</h3>
                    <p>${extension.description}</p>
                  </div>
                </div>
                <div class="block-bottom">
                  <div class="remove-button">Remove</div>
                  <div class="extension-toggle ${mode}" onclick="toggle(this);">
                    <div class="circle"></div>
                  </div>
                </div>
              </div>
            `;
}
