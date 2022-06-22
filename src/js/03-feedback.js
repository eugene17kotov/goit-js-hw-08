import throttle from 'lodash.throttle';

const form = document.querySelector('form');

let data = {
  email: '',
  message: '',
};

form.addEventListener('input', throttle(onWriteSomething, 500));
form.addEventListener('submit', onSubmitForm);

if (localStorage.getItem('feedback-form-state')) {
  data = JSON.parse(localStorage.getItem('feedback-form-state'));
}

checkFormValue();

function checkFormValue() {
  form.email.value = data.email;
  form.message.value = data.message;
}

function onWriteSomething(e) {
  data[e.target.name] = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(data));
}

function onSubmitForm(e) {
  e.preventDefault();
  consoleData();
  localStorage.clear();
  form.reset();
  data.email = '';
  data.message = '';
}

function consoleData() {
  if (data.email !== '' || data.message !== '') {
    console.log(data);
  }
}

// ---------------------------------------------------------------

// checkFormValue();

// form.addEventListener('input', throttle(onWriteSomething, 500));
// form.addEventListener('submit', onSubmitForm);

// function checkFormValue() {
//   if (localStorage.getItem('feedback-form-state')) {
//     form.email.value = getData().email;
//     form.message.value = getData().message;
//   }
// }

// function onWriteSomething() {
//   localStorage.setItem(
//     'feedback-form-state',
//     JSON.stringify({
//       email: form.email.value,
//       message: form.message.value,
//     })
//   );
// }

// function onSubmitForm(e) {
//   e.preventDefault();
//   consoleData();
//   localStorage.clear();
//   form.reset();
// }

// function getData() {
//   return JSON.parse(localStorage.getItem('feedback-form-state'));
// }

// function consoleData() {
//   if (localStorage.getItem('feedback-form-state')) {
//     if (getData().email !== '' || getData().message !== '')
//       console.log(getData());
//   }
// }

// -------------------------------------------------------------

// import throttle from 'lodash.throttle';

// const formRef = document.querySelector('.feedback-form');
// const emailRef = document.querySelector('[name="email"]');
// const messageRef = document.querySelector('[name="message"]');

// const feedbackFormState = { email: '', message: '' };
// let localStorageData = localStorage.getItem('feedback-form-state');
// const parsedLocalStorageData = JSON.parse(localStorageData);

// formRef.addEventListener('input', throttle(saveInputToLocal, 500));
// formRef.addEventListener('submit', onSubmitAction);

// fillFieldsWithSavedData();

// function saveInputToLocal(event) {
//   feedbackFormState.email = event.target.value;
//   feedbackFormState.message = event.target.value;

//   localStorage.setItem(
//     'feedback-form-state',
//     JSON.stringify(feedbackFormState)
//   );
// }

// function fillFieldsWithSavedData() {
//   if (localStorageData) {
//     emailRef.value = parsedLocalStorageData.email;
//     messageRef.value = parsedLocalStorageData.message;
//   }
// }

// function onSubmitAction(event) {
//   event.preventDefault();

//   const {
//     elements: { email, message },
//   } = event.currentTarget;

//   if (email.value === '' || message.value === '') {
//     return alert('Заполните все поля');
//   }

//   console.log(feedbackFormState);
//   feedbackFormState.email = '';
//   feedbackFormState.message = '';
//   event.currentTarget.reset();
//   localStorage.clear();
// }

// ------------------------------------------------------

// import throttle from 'lodash.throttle';

// const STORAGE_KEY = 'feedback-form-state';

// const form = document.querySelector('.feedback-form');
// const input = document.querySelector('input[name=email]');
// const textArea = document.querySelector('textarea[name=message]');

// form.addEventListener('input', throttle(onFormInput, 500));
// form.addEventListener('submit', onFormSumbit);

// let formData = {
//   email: '',
//   message: '',
// };

// function onFormInput(event) {
//   formData[event.target.name] = event.target.value;

//   localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
// }

// function onFormSumbit(event) {
//   event.preventDefault();

//   const parsedForm = JSON.parse(localStorage.getItem(STORAGE_KEY));

//   if (formData.email === '' || formData.message === '') {
//     console.log('Заполните все поля');
//   } else {
//     console.log(parsedForm);
//   }

//   localStorage.clear();
//   event.currentTarget.reset();
// }

// populateForm();

// function populateForm() {
//   if (localStorage.getItem(STORAGE_KEY)) {
//     formData = JSON.parse(localStorage.getItem(STORAGE_KEY));
//   }

//   input.value = formData.email;
//   textArea.textContent = formData.message;
// }
