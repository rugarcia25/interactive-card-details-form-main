const form= document.querySelector('form');
const section= document.querySelector('#section-hidden');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  form.classList.add('hidden');
  section.classList.remove('hidden');
});
