
// DOM ELEMENTS
const button_burgerMenu = document.querySelector('.header__top__burgerMenu');
const menu_mobile = document.querySelector('.header__mobileMenu');

// VARIABLES
let burgerMenuActivated = false;

// USER EVENTS
// Toggle burger menu
button_burgerMenu.addEventListener('click', () => {
    menu_mobile.style.display = burgerMenuActivated ? "none" : "block";
    burgerMenuActivated = !burgerMenuActivated;
});


// OTHER EVENTS
window.addEventListener('resize', () => {
    
    // Deactivate burger menu
    menu_mobile.style.display = "none";
    burgerMenuActivated = false;

})