/* Date of Form Code */
const formLoadInput = document.querySelector('#display-form-date');
const formLoad = new Date();

formLoadInput.value = formLoad;
console.log("Date of Form: " + formLoad);