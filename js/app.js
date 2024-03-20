const form = document.getElementById("datos");
const btnContinue = document.getElementById("btn-continue");
const sectionHidden = document.getElementById("section-hidden");
const formNumber = document.getElementById("form-number");
const formName = document.getElementById("form-name");
const formMonth = document.getElementById("form-month");
const formYear = document.getElementById("form-year");
const formCvc = document.getElementById("form-cvc");
const cardNumber = document.getElementById("card-number");
const cardName = document.getElementById("card-name");
const cardMonth = document.getElementById("card-month");
const cardYear = document.getElementById("card-year");
const cardCvc = document.getElementById("card-cvc");

formName.addEventListener("input", () => {
  cardName.innerText = formName.value;

  if (formName.value.length === 0) {
    cardName.innerText = "Jane Appleseed";
  }
});

formNumber.addEventListener("input", () => {
  cardNumber.innerText = formNumber.value.replace(/\d{4}(?=.)/g, "$& ");

  if (formNumber.value.length === 0) {
    cardNumber.innerText = "0000 0000 0000 0000";
  }
});

formMonth.addEventListener("input", () => {
  cardMonth.innerText = formMonth.value;

  if (formMonth.value.length === 0) {
    cardMonth.innerText = "00";
  }
});

formYear.addEventListener("input", () => {
  cardYear.innerText = formYear.value;

  if (formYear.value.length === 0) {
    cardYear.innerText = "00";
  }
});

formCvc.addEventListener("input", () => {
  cardCvc.innerText = formCvc.value;

  if (formCvc.value.length === 0) {
    cardCvc.innerText = "000";
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  form.classList.add("hidden");
  sectionHidden.classList.remove("hidden");
});

btnContinue.addEventListener("click", () => {
  form.classList.remove("hidden");
  sectionHidden.classList.add("hidden");
  form.reset(); // Reset form
  cardName.innerText = "Jane Appleseed";
  cardNumber.innerText = "0000 0000 0000 0000";
  cardMonth.innerText = "00";
  cardYear.innerText = "00";
  cardCvc.innerText = "000";
});
