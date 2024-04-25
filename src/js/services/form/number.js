const formNumber = document.querySelector('#form-number');
const cardNumber = document.querySelector('#card-number');

formNumber.addEventListener('input', () => {
  cardNumber.innerText = formNumber.value.replace(/\D/g, '').replace(/\B(?=(\d{4})+(?!\d))/g, ' ');
});

formNumber.addEventListener('keydown', (e) => {
  e.target.value = e.target.value.replace(/\D/g, '').replace(/\B(?=(\d{4})+(?!\d))/g, ' ');
});
