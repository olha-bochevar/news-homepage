// DOM
const body = document.querySelector('body');
const wrapper = document.querySelector('.wrapper');
const nav = document.querySelector('nav');
const btnMenuOpen = document.querySelector('.menu__image');
const btnMenuClose = document.querySelector('.menu__close');
const ul = document.querySelector('nav > ul');

// open and close mobile menu
btnMenuOpen.addEventListener('click', () => {
    nav.style.width = '70%';
    btnMenuClose.style.display = 'block';
    body.style.backgroundColor = 'var(--grayish-blue)';
});
btnMenuClose.addEventListener('click', () => {
    closeMenu();
});
ul.addEventListener('click', e => {
    if (e.target.tagName === 'A') {
        closeMenu();
    }
})
function closeMenu() {
    nav.style.width = '0%';
    btnMenuClose.style.display = 'none';
    body.style.backgroundColor = '';
}