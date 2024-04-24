const form = document.getElementById('datos');
const btnContinue = document.getElementById('btn-continue');
const sectionHidden = document.getElementById('section-hidden');
const cardNumber = document.getElementById('card-number');
const cardName = document.getElementById('card-name');
const cardMonth = document.getElementById('card-month');
const cardYear = document.getElementById('card-year');
const cardCvc = document.getElementById('card-cvc');

btnContinue.addEventListener('click', () => {
  form.classList.remove('hidden');
  sectionHidden.classList.add('hidden');
  form.reset(); // Reset form
  cardName.innerText = 'Jane Appleseed';
  cardNumber.innerText = 'xxxx xxxx xxxx xxxx';
  cardMonth.innerText = '00';
  cardYear.innerText = '00';
  cardCvc.innerText = '000';
});
