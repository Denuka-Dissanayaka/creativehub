const mobileMenu = document.querySelector('.mobile-menu-icon');
const closeBtn = document.querySelector('.close-btn');

mobileMenu.addEventListener('click', () => {
    document.querySelector('.popup-mobile-menu').classList.add('menu-click');
})

closeBtn.addEventListener('click', () => {
    document.querySelector('.popup-mobile-menu').classList.remove('menu-click');
})


// scrolling navbar

window.addEventListener('scroll', () => {
    if(window.pageYOffset > 0) {
       document.querySelector('nav').classList.add('nav-scroll')
    } else if (window.pageYOffset === 0) {
        document.querySelector('nav').classList.remove('nav-scroll')
    }
})


