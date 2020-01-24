let introQuote = document.querySelector(".intro-quote");

window.onload = () => { introQuote.classList.add("intro-quote-show"); }


let hamburgerMenu = document.querySelector(".hamburger-menu");
let navMobileMenu = document.querySelector(".nav-mobile-menu");

hamburgerMenu.addEventListener("click", () => {
    navMobileMenu.classList.toggle("showing");
})