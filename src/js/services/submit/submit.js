const form = document.querySelector('form');
const cardName = document.querySelector('#card-name');
const giveMessage = document.querySelector('#thanks');

const section = document.querySelector('#section-hidden');
form.addEventListener('submit', (event) => {
  event.preventDefault();

  form.classList.add('hidden');
  section.classList.remove('hidden');

  giveMessage.textContent = 'Thank you, ' + cardName.innerText.split(' ')[0];
});
