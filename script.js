const hamburger = document.querySelector('#hamburger');
const sideMenu = document.querySelector('#side-menu');
const cross = document.querySelector('#cross')
const openSideMenu = () => {
  sideMenu.classList.add('open-side-menu');
};
const closeSideMenu = () => {
    sideMenu.classList.remove('open-side-menu');
}
hamburger.addEventListener('click', openSideMenu);
cross.addEventListener('click', closeSideMenu);