const form = document.querySelector('.form__free');
const nameError = form.querySelector('.form__name-error');
const phoneError = form.querySelector('.form__phone-error');
const nameInput = form.querySelector('.form__name');
const phoneInput = form.querySelector('.form__phone');
let isValid = true;

const validateName = () => {
  const nameValue = form.querySelector('.form__name').value;
  const nameValidate = /^[А-ЯA-Z][А-Яа-яA-Za-z\s]*$/;

  if (!nameValidate.test(nameValue)) {
    nameError.textContent = 'Имя должно содержать только буквы и пробелы, а также начинаться с большой буквы.';
    nameError.style.display = 'block';
    nameInput.classList.add('form__input--error');
    isValid = false;
  } else {
    nameError.style.display = 'none';
    nameInput.classList.remove('form__input--error');
  }
};

const validatePhone = () => {
  const phoneValue = form.querySelector('.form__phone').value;
  const phoneValidate = /^(?:\d[-\d]*){11}$/;
  if (!phoneValidate.test(phoneValue)) {
    phoneError.textContent = 'Телефон не должен содержать буквы или символов отличных от "-", не меньше 11 цифр';
    phoneError.style.display = 'block';
    phoneInput.classList.add('form__input--error');
    isValid = false;
  } else {
    phoneError.style.display = 'none';
    phoneInput.classList.remove('form__input--error');
  }
};

const onValidateFormSubmit = (evt) => {
  evt.preventDefault();
  isValid = true;
  validateName();
  validatePhone();

  if (isValid) {
    form.submit();
    form.reset();
  }
};

form.addEventListener('submit', onValidateFormSubmit);
