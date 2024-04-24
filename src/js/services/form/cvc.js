const formCvc = document.getElementById('form-cvc');
formCvc.addEventListener('input', () => {
  cardCvc.innerText = formCvc.value;

  if (formCvc.value.length === 0) {
    cardCvc.innerText = '000';
  }
});
