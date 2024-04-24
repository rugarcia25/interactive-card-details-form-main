const formName = document.getElementById('form-name');
formName.addEventListener('input', () => {
  cardName.innerText = formName.value;

  if (formName.value.length === 0) {
    cardName.innerText = 'Jane Appleseed';
  }
});
