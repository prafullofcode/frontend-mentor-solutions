let extensions = [
  {
    index: 0,
    logo: "./assets/images/logo-devlens.svg",
    name: "DevLens",
    description:
      "Quickly inspect page layouts and visualize element boundaries.",
    isActive: true,
    remove: false,
  },
  {
    index: 1,
    logo: "./assets/images/logo-style-spy.svg",
    name: "StyleSpy",
    description: "Instantly analyze and copy CSS from any webpage element.",
    remove: false,
    isActive: true,
  },
  {
    index: 2,
    logo: "./assets/images/logo-speed-boost.svg",
    name: "SpeedBoost",
    description: "Optimizes accelerate page loading.",
    remove: false,
    isActive: false,
  },
  {
    index: 3,
    logo: "./assets/images/logo-json-wizard.svg",
    name: "JSONWizard",
    description:
      "Formats, validates, and prettifies JSON responses in-browser.",
    remove: false,
    isActive: true,
  },
  {
    index: 4,
    logo: "./assets/images/logo-tab-master-pro.svg",
    name: "TabMaster Pro",
    description: "Organizes browser tabs into groups and sessions.",
    remove: false,
    isActive: true,
  },
  {
    index: 5,
    logo: "./assets/images/logo-viewport-buddy.svg",
    name: "ViewportBuddy",
    description:
      "Simulates various screen resolutions directly within the browser.",
    remove: false,
    isActive: false,
  },
  {
    index: 6,
    logo: "./assets/images/logo-markup-notes.svg",
    name: "Markup Notes",
    description:
      "Enables annotation and notes directly onto webpages for collaborative debugging.",
    remove: false,
    isActive: true,
  },
  {
    index: 7,
    logo: "./assets/images/logo-grid-guides.svg",
    name: "GridGuides",
    description:
      "Overlay customizable grids and alignment guides on any webpage.",
    remove: false,
    isActive: false,
  },
  {
    index: 8,
    logo: "./assets/images/logo-palette-picker.svg",
    name: "Palette Picker",
    description: "Instantly extracts color palettes from any webpage.",
    remove: false,
    isActive: true,
  },
  {
    index: 9,
    logo: "./assets/images/logo-link-checker.svg",
    name: "LinkChecker",
    description: "Scans and highlights broken links on any page.",
    remove: false,
    isActive: true,
  },
  {
    index: 10,
    logo: "./assets/images/logo-dom-snapshot.svg",
    name: "DOM Snapshot",
    description: "Capture and export DOM structures quickly.",
    remove: false,
    isActive: false,
  },
  {
    index: 11,
    logo: "./assets/images/logo-console-plus.svg",
    name: "ConsolePlus",
    description:
      "Enhanced developer console with advanced filtering and logging.",
    remove: false,
    isActive: true,
  },
];

darkToggle = false;

function loadData() {
  let container = document.getElementById("blocks-container");
  console.log("data loading...");
  removeData();
  extensions.forEach((extension) => {
    const removeOrNot = extension.remove ? "none" : "";
    const active = extension.isActive ? "active" : "";
    container.innerHTML += `
      <div class="block ${removeOrNot}">
        <div class="block-top">
          <img src="${extension.logo}" alt="${extension.name} logo" class="extension-logo" height="60" width="60" />
          <div class="block__text">
            <h3 class="extension-name">${extension.name}</h3>
            <p class="darken">${extension.description}</p>
          </div>
        </div>
        <div class="block-bottom">
          <div class="remove-button darken" onclick="removeExtension(${extension.index})">Remove</div>
          <div class="extension-toggle ${active}"  id="${extension.index}" onclick="toggle(this)">
            <div class="circle"></div>
          </div>
        </div>
      </div>
    `;
  });
  if (darkToggle) {
    darken();
  }
}

function loadActive() {
  let container = document.getElementById("blocks-container");
  removeData();
  console.log("active data loading...");
  extensions.forEach((extension) => {
    const removeOrNot = extension.remove ? "none" : "";

    if (extension.isActive) {
      changeInnerHtml(container, extension, "active", removeOrNot);
    }
  });
  if (darkToggle) {
    darken();
  }
}

function loadInactive() {
  let container = document.getElementById("blocks-container");
  removeData();
  console.log("inactive data loading...");
  extensions.forEach((extension) => {
    const removeOrNot = extension.remove ? "none" : "";

    if (!extension.isActive) {
      changeInnerHtml(container, extension, "", removeOrNot);
    }
  });
  if (darkToggle) {
    darken();
  }
}

function removeData() {
  let container = document.getElementById("blocks-container");
  container.innerHTML = " ";
}

function changeInnerHtml(container, extension, mode, none) {
  container.innerHTML += `
              <div class="block ${none}">
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
              <a href= "#popup1"><div class="remove-button" onclick="removeExtension(${extension.index})">Remove</div></a>
                  <div class="extension-toggle ${mode}"id="${extension.index}" onclick="toggle(this);">
                  <div class="extension-toggle ${mode}" id="${extension.index}" onclick="toggle(this);">
                    <div class="circle"></div>
                  </div>
              </div>
            `;
}

function removeExtension(toRemoveIndex) {
  console.log(`${toRemoveIndex} is removed`);
  extensions[toRemoveIndex].remove = true;
  removeData();
  if (activeButton == 0) loadData();
  else if (activeButton == 1) loadActive();
  else loadInactive();
}
