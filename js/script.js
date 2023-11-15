/*
[...document.querySelectorAll('li > ul')].forEach(ul => {
    ul.parentElement.classList.add('red');
})*/

let header__layout__hamburger = document.querySelector("#header__layout__hamburger")
let header__layout__menu = document.querySelector("#header__layout__menu")

let hamburger = document.querySelector("#hamburger")
let hamburger__close = document.querySelector("#hamburger__close")
let header__layout__menu__title = document.querySelector("#header__layout__menu__title")
let header__layout__menu__item__submenu = document.querySelector("#header__layout__bottom__item__submenu")
let submenu__arrow = document.querySelector("#submenu__arrow")


if (document.documentElement.clientWidth < 992) {
    header__layout__hamburger.onclick = () => {
        document.body.classList.toggle("nav--opened")
        header__layout__menu.classList.toggle("opened")
        hamburger.classList.toggle("visible")
        hamburger.classList.toggle("unvisible")
        hamburger__close.classList.toggle("visible")
    }

    header__layout__menu__title.onclick = () => {
        header__layout__menu__item__submenu.classList.toggle("submenu-opened")
        submenu__arrow.classList.toggle("rotate")
    }
}