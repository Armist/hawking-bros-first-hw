const name = document.querySelector('.form__name');
const phone = document.querySelector('.form__phone');
const form = document.querySelector('.consultation__form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert(`Имя: ${name.value}\nНомер: ${phone.value}`);
});
