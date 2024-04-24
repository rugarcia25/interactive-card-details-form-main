const formMonth = document.getElementById('form-month');
formMonth.addEventListener('input', () => {
  cardMonth.innerText = formMonth.value;

  if (formMonth.value.length === 0) {
    cardMonth.innerText = '00';
  }
});
