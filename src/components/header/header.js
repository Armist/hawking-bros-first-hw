const burgers = document.querySelectorAll('.burger');
const headerInner = document.querySelector('.header__inner');
const contacts = document.querySelector('.header__contacts');
const nav = document.querySelector('.header__nav');
const buttons = document.querySelectorAll('.header__button');
const btn1 = buttons[2];
const btn2 = buttons[1];

burgers.forEach((burger) => {
  burger.addEventListener('click', (e) => {
    e.preventDefault();
    burger.classList.toggle('burger-active');
    headerInner.classList.toggle('header__inner-opened');
    contacts.classList.toggle('header__contacts-showed');
    nav.classList.toggle('header__nav-showed');
    btn1.classList.toggle('header__button-showed');
    btn2.classList.toggle('header__button-showed');
  });
});
