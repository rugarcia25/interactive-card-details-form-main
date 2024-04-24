const formYear = document.getElementById('form-year');
formYear.addEventListener('input', () => {
  cardYear.innerText = formYear.value;

  if (formYear.value.length === 0) {
    cardYear.innerText = '00';
  }
});
