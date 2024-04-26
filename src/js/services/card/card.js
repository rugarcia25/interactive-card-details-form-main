const cardForm = document.querySelector('#datos');

const btnContinue = document.querySelector('#btn-continue');

const sectionHidden = document.querySelector('#section-hidden');
const number = document.querySelector('#card-number');
const name = document.querySelector('#card-name');
const month = document.querySelector('#card-month');
const year = document.querySelector('#card-year');
const cvc = document.querySelector('#card-cvc');

btnContinue.addEventListener('click', () => {
  cardForm.classList.remove('hidden');
  sectionHidden.classList.add('hidden');

  cardForm.reset();

  name.innerText = 'xxxxx xxxxxxx';
  number.innerText = 'xxxx xxxx xxxx xxxx';
  month.innerText = 'xx';
  year.innerText = 'xx';
  cvc.innerText = 'xxx';
});
