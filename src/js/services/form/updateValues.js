function updateCardElement(element, defaultValue) {
  const card = document.querySelector(`#card-${element}`);
  const form = document.querySelector(`#form-${element}`);

  const updateCardText = () => {
    const savedValue = form.value;
    if (savedValue) {
      card.innerText = savedValue;
    } else {
      card.innerText = defaultValue;
    }
  };

  document.addEventListener('DOMContentLoaded', updateCardText);
  form.addEventListener('input', updateCardText);
}

updateCardElement('month', 'xx');
updateCardElement('year', 'xx');
updateCardElement('cvc', 'xxx');
updateCardElement('name', 'xxxx xxxx xxxx xxxx');
updateCardElement('number', 'xxxx xxxx xxxx xxxx');
