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
              <div class="block darken">
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
                    <p class="darken">${extension.description}</p>
                  </div>
                </div>
                <div class="block-bottom">
                  <a href= "#popup1"><div class="remove-button darken">Remove</div></a>
                  <div class="extension-toggle ${active}" onclick="toggle(this); changeData(this)">
                    <div class="circle"></div>
                  </div>
                </div>
              </div>
            `;
        if (darkToggle == true) {
          darken();
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
      if (darkToggle) {
        darken();
      }
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
      if (darkToggle) {
        darken();
      }
    });
}

function changeInnerHtml(container, extension, mode) {
  container.innerHTML += `
              <div class="block darken">
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
                    <p class  = "darken">${extension.description}</p>
                  </div>
                </div>
                <div class="block-bottom">
              <a href= "#popup1"><div class="remove-button darken">Remove</div></a>
                  <div class="extension-toggle ${mode}" onclick="toggle(this);">
                    <div class="circle"></div>
                  </div>
                </div>
              </div>
            `;
}
