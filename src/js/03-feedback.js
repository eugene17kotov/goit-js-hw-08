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
