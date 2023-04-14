import { desktopProjects, mobileProjects } from "./data.js";

const hamburger = document.querySelector("#hamburger");
const sideMenu = document.querySelector("#side-menu");
const cross = document.querySelector("#cross");
const body = document.querySelector("body");
const menuLinks = document.querySelectorAll(".menu-link");
const projectContainer = document.querySelector("#portfolio");
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
// Mobile Version//
for (let i = 0; i < mobileProjects.length; i += 1) {
  const data = mobileProjects[i];
  const card = document.createElement("div");
  card.classList.add("card");

  let tags = "";
  for (let index = 0; index < data.technologies.length; index += 1) {
    const element = data.technologies[index];
    tags += `<li id="html">${element}</li>`;
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

// Desktop Version//
for (let i = 0; i < desktopProjects.length; i += 1) {
  const data = desktopProjects[i];
  const index = desktopProjects.indexOf(data);

  let tags = "";
  for (let index = 0; index < data.technologies.length; index += 1) {
    const element = data.technologies[index];
    tags += `<li id="html">${element}</li>`;
  }

  const card = document.createElement("div");
  card.classList.add("card");

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
  modalDescription.textContent = usingData.description;
  modalSeeLive.href = "https://www.google.com";
  modalSeeSource.href = "https://www.github.com";
  const { technologies } = usingData;
  let tags = "";
  for (let index = 0; index < technologies.length; index += 1) {
    const element = technologies[index];
    tags += ` <li >${element}</li>`;
  }

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
    window.scrollTo(scrollX, scrollY);
  }, 500);
};

// bind the closing function
document.querySelector(".modal-cross").addEventListener("click", closeModal);

// bind open popup function
// desktop
for (let index = 0; index < desktopProjects.length; index += 1) {
  document
    .querySelector(`.desktop-card-button${index}`)
    .addEventListener("click", () => {
      openModal(desktopProjects[index]);
    });
}

// mobile
for (let index = 0; index < mobileProjects.length; index += 1) {
  document
    .querySelector(`.mobile-card-button${index}`)
    .addEventListener("click", () => {
      openModal(mobileProjects[index]);
    });
}

// Contact-form Validation

const form = document.querySelector("#form");
const errorMessage = document.querySelector(".error-message");
const emailField = document.querySelector("#email");
const userName = document.querySelector("#user_name");
const something = document.querySelector("#message-something");

const setError = () => {
  errorMessage.style.setProperty("display", "block");
};

const hideError = () => {
  errorMessage.style.setProperty("display", "none");
};

const isLowerCase = (input) => input === String(input).toLowerCase();

form.addEventListener("submit", (event) => {
  const lowercase = isLowerCase(emailField.value);
  if (!lowercase) {
    event.preventDefault();
    setError();
  } else {
    hideError();
  }
});

//preserve data
const localData = JSON.parse(localStorage.getItem("formData"));
if (localData) {
  userName.value = localData.userName;
  emailField.value = localData.email;
  something.value = localData.textErea;
}

//save in local storage function
const save = () => {
  const formData = {
    userName: userName.value,
    email: emailField.value,
    textErea: something.value,
  };

  localStorage.setItem('formData', JSON.stringify(formData));
};

userName.addEventListener('input', save)
emailField.addEventListener('input', save)
something.addEventListener('input', save)
