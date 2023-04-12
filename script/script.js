const hamburger = document.querySelector('#hamburger');
const sideMenu = document.querySelector('#side-menu');
const cross = document.querySelector('#cross');
const body = document.querySelector('body');
const menuLinks = document.querySelectorAll('.menu-link');
const projectContainer =  document.querySelector('#portfolio')
import {desktopProjects, mobileProjects} from './data.js'

const openSideMenu = () => {
  sideMenu.classList.add('open-side-menu');
  body.style.overflow = 'hidden';
};

const closeSideMenu = () => {
  sideMenu.classList.remove('open-side-menu');
  body.style.overflow = 'unset';
};

hamburger.addEventListener('click', openSideMenu);
cross.addEventListener('click', closeSideMenu);

for (let i = 0; i < menuLinks.length; i += 1) {
  menuLinks[i].addEventListener('click', closeSideMenu);
}

// popup 
for(let data of mobileProjects) {
  console.log(data);
  const card = document.createElement('div')
  card.classList.add("card")

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
      <li id="html">html</li>
      <li id="css">css</li>
      <li id="javascript">javascript</li>
    </ul>
    <button id="popup" type="button">See Project</button>
  </div>
  `

  projectContainer.appendChild(card);
}

// popup 
