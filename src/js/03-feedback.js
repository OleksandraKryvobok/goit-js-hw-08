import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('input'),
    textarea: document.querySelector('textarea'),
};

const formData = {};
const STORAGE_KEY = "feedback-form-state";

refs.form.addEventListener('input', throttle(onFormChange, 500));
refs.form.addEventListener('submit', onFormSubmit);

populateFormData();

function onFormChange(e) {
    if(e.target.name === 'email') {
        formData.email = e.target.value;
    } else {
        formData.message = e.target.value;
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(e) {
    e.preventDefault();

    e.currentTarget.reset();

    localStorage.removeItem(STORAGE_KEY);

    console.log(formData);
}

function populateFormData() {
    const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if(savedData) {
        refs.input.value = savedData.email;
        refs.textarea.value = savedData.message;


        console.log(savedData);
    }
}


