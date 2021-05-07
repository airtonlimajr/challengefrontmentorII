const navBtn = document.getElementById('hamburger');
const navIcon = document.querySelector('.nav-icon');
const navEl = document.querySelector('.nav')
const screenWidth = document.querySelector('body').clientWidth;
const navImgs = document.querySelectorAll('.nav-dropdown-item img')

setNavIcons()

navBtn.addEventListener('click', () => {

    navEl.classList.toggle('show')
    if (navEl.classList.contains('show')) {
        navIcon.src = './images/icon-close.svg';
        navIcon.alt = 'nav-close-icon';
    } else {
        navIcon.src = './images/icon-hamburger.svg';
        navIcon.alt = 'nav-open-icon';
    }
})


function setNavIcons() {
    if (screenWidth >= 768) {
        navImgs.forEach(img => {
            img.src = "./images/icon-arrow-light.svg"
            img.alt = "arrow icon"
        })
    }
}