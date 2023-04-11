const hamburger = document.querySelector('#hamburger');
const sideMenu = document.querySelector('#side-menu');
const cross = document.querySelector('#cross')
const body = document.querySelector('body')
const menuLinks = document.querySelectorAll('.menu-link')

const openSideMenu = () => {
  sideMenu.classList.add('open-side-menu');
  body.style.overflow = 'hidden'
};

const closeSideMenu = () => {
    sideMenu.classList.remove('open-side-menu');
    body.style.overflow = 'unset'
}

hamburger.addEventListener('click', openSideMenu);
cross.addEventListener('click', closeSideMenu);

for(let link of menuLinks) {
  link.addEventListener("click", closeSideMenu)
}