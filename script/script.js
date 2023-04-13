const hamburger = document.querySelector("#hamburger");
const sideMenu = document.querySelector("#side-menu");
const cross = document.querySelector("#cross");
const body = document.querySelector("body");
const menuLinks = document.querySelectorAll(".menu-link");
const projectContainer = document.querySelector("#portfolio");
import  desktopProjects from "./data.js";
const desktopContainer = document.querySelector("#desktop-portfolio");
const modalTitle = document.querySelector(".modal-title");
const modalCompany = document.querySelector(".modal-company");
const modalCounterText = document.querySelector(".modal-countertext");
const modalYear = document.querySelector(".modal-year");
const modalIMage = document.querySelector(".modal-image");
const modalDescription = document.querySelector("#modal-description");
const modalSkills = document.querySelector(".modal-skills");
const modalSeeLive = document.querySelector("#see-live");
const modalSeeSource = document.querySelector("#see-source");
const modal = document.querySelector(".modal");
const modalContainer = document.querySelector(".modal-container");

const openSideMenu = () => {
  sideMenu.classList.add("open-side-menu");
  body.style.overflow = "hidden";
};

const closeSideMenu = () => {
  sideMenu.classList.remove("open-side-menu");
  body.style.overflow = "unset";
};

hamburger.addEventListener("click", openSideMenu);
cross.addEventListener("click", closeSideMenu);

for (let i = 0; i < menuLinks.length; i += 1) {
  menuLinks[i].addEventListener("click", closeSideMenu);
}

// popup
//Mobile Version//
for (let i = 0; i < desktopProjects.length; i += 1) {
  const data = desktopProjects[i];
  const card = document.createElement("div");
  card.classList.add("card");
  let tags = ''
  for(let j = 0; j < desktopProjects[i].technologies.length; j += 1){
    const tag = desktopProjects[i].technologies[j]
    tags += `<li id="html">${tag}</li>`
  }

  card.innerHTML = `
  <img class="card-image" src=${data.cardImage1} alt="mobileVersion" />
  <div class="tonic-area">
    <h2 class="cards-details">${data.cardTitle}</h2>
    <div class="highlights">
      <span class="highlight-text">${data.company}</span>
      <img src="images/Counter.png" alt="Counter.png" />
      <span class="countertext">${data.counterText}</span>
      <img src="images/Counter.png" alt="Counter.png" />
      <span class="year">${data.year}</span>
    </div>
    <article class="cards-description">
      <p>
        ${data.description}
      </p>
    </article>
    <ul class="skills">
      ${tags}
    </ul>
    <button class='mobile-card-button${i}' id="popup" type="button">See Project</button>
  </div>
  `;

  projectContainer.appendChild(card);
}

//Desktop Version//
for (let i = 0; i < desktopProjects.length; i += 1) {
  const data = desktopProjects[i];
  const index = desktopProjects.indexOf(data);

  const card = document.createElement("div");
  card.classList.add("card");

  let tags = ''
  for(let j = 0; j < desktopProjects[i].technologies.length; j += 1){
    const tag = desktopProjects[i].technologies[j]
    tags += `<li id="html">${tag}</li>`
  }

  card.innerHTML =
    index % 2 === 0
      ? `
  <img class="card-image" src=${data.cardImage1} alt="desktopVersion" />
  <div class="tonic-area">
    <h2 class="cards-details">${data.cardTitle}</h2>
    <div class="highlights">
      <span class="highlight-text">${data.company}</span>
      <img src="images/Counter.png" alt="Counter" />
      <span class="countertext">${data.counterText}</span>
      <img src="images/Counter.png" alt="Counter" />
      <span class="year">${data.year}</span>
    </div>
    <article class="cards-description">
      <p class="paragraph-description">
      ${data.description}
      </p>
    </article>
    <ul class="skills">
      ${tags}
    </ul>
    <button class='desktop-card-button${i}' id="popup" type="button">See Project</button>
  </div>
  `
      : `
  <div class="tonic-area">
    <h2 class="cards-details">${data.cardTitle}</h2>
    <div class="highlights">
      <span class="highlight-text">${data.company}</span>
      <img src="images/Counter.png" alt="Counter" />
      <span class="countertext">${data.counterText}</span>
      <img src="images/Counter.png" alt="Counter" />
      <span class="year">${data.year}</span>
    </div>
    <article class="cards-description">
      <p class="paragraph-description">
      ${data.description}
      </p>
    </article>
    <ul class="skills">
      ${tags}
    </ul>
    <button class = 'desktop-card-button${i}' id="popup" type="button">See Project</button>
  </div>
  <img class="card-image" src=${data.cardImage1} alt="desktopVersion" />
  `;
  desktopContainer.appendChild(card);
}
// popup

// change popup data
const changePopupData = (data) => {
  const usingData = data;
  modalTitle.textContent = usingData.cardTitle;
  modalCompany.textContent = usingData.company;
  modalCounterText.textContent = usingData.counterText;
  modalYear.textContent = usingData.year;
  modalIMage.style.setProperty(
    "background-image",
    `url(${usingData.cardImage1})`
  );
  // modalIMage.classList.add('modal-image')
  modalDescription.textContent = usingData.description;
  modalSeeLive.href = "https://www.google.com";
  modalSeeSource.href = "https://www.github.com";
  const technologies = usingData.technologies;
  let tags = "";
  for (let index = 0; index < technologies.length; index++) {
    const element = technologies[index];
    tags += ` <li >${element}</li>`;
  }

  console.log(usingData.cardImage1);

  modalSkills.innerHTML = tags;
};

// open modal function
let scrollX = 0;
let scrollY = 0;
const openModal = (data) => {
  scrollX = window.scrollX;
  scrollY = window.scrollY;
  changePopupData(data);
  modalContainer.classList.add("open-modal-container");

  setTimeout(() => {
    modal.classList.add("open-modal");
    body.style.overflow = "hidden";
    window.scrollTo(0, 0);
  }, 500);
};

// close modal function
const closeModal = () => {
  modal.classList.remove("open-modal");
  setTimeout(() => {
    modalContainer.classList.remove("open-modal-container");
    body.style.overflow = "unset";
    window.scrollTo(scrollX, scrollY)
  }, 500);
};

// bind the closing function
document.querySelector(".modal-cross").addEventListener("click", closeModal);

// bind open popup function
// desktop
for (let index = 0; index < desktopProjects.length; index++) {
  document
    .querySelector(`.desktop-card-button${index}`)
    .addEventListener("click", () => {
      openModal(desktopProjects[index]);
      console.log("modal openned");
    });
}

// mobile
for (let index = 0; index < desktopProjects.length; index++) {
  console.log(`I am the ${index}`);
  document
    .querySelector(`.mobile-card-button${index}`)
    .addEventListener("click", () => {
      openModal(desktopProjects[index]);
    });
}
