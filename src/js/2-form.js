import '../css/styles.css';
let formData = {
  email: '',
  message: '',
};
let storageKeyForFormData = 'feedback-form-state';

let onFormSubmit = function (evt) {
  evt.preventDefault();
  let emailValue = this.elements.email.value.trim();
  let messageValue = this.elements.message.value.trim();

  let formIsNotFilled = !emailValue || !messageValue;
  if (formIsNotFilled) {
    alert('Fill please all fields');
  } else {
    console.log({
      email: emailValue,
      message: messageValue,
    });
    localStorage.removeItem(storageKeyForFormData);
    this.reset();
  }
};
let onFormDataChanged = function (event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(storageKeyForFormData, JSON.stringify(formData));
};
let restoreFormData = function () {
  let storageData = localStorage.getItem(storageKeyForFormData);
  if (storageData) {
    formData = JSON.parse(storageData);
    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
  }
};
let form = document.querySelector('form.feedback-form');
if (form) {
  restoreFormData();
  form.addEventListener('input', onFormDataChanged);
  form.addEventListener('submit', onFormSubmit);
}
