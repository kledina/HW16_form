const form = document.forms.form;

const nameInput = form.elements.name;
const emailInput = form.elements.email;
const ageInput = form.elements.age;
const genderInput = document.getElementsByName('gender');
const passwordInput = form.elements.password;
const termsCheckbox = form.elements.agreement;

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const ageError = document.getElementById('ageError');
const genderError = document.getElementById('genderError');
const passwordError = document.getElementById('passwordError');
const termsError = document.getElementById('termsError');

nameInput.addEventListener('focus', function () {
    nameInput.style.border = '2px solid darkblue';
});

nameInput.addEventListener('blur', function () {
    nameInput.style.border = '';
});

form.addEventListener('submit', function(evt) {

    evt.preventDefault();

    let hasError = false;

    nameError.style.display = 'none';
    emailError.style.display = 'none';
    ageError.style.display = 'none';
    genderError.style.display = 'none';
    passwordError.style.display = 'none';
    termsError.style.display = 'none';

    if (nameInput.value === '') {
        nameError.textContent = 'Введите имя пользователя.';
        nameError.style.display = 'block';
        hasError = true;
    }

    if (validateEmail(emailInput.value) === false) {
        emailError.textContent = 'Введите корректный email.';
        emailError.style.display = 'block';
        hasError = true;
    }

    if (ageInput.value === '') {
        ageError.textContent = 'Укажите свой возраст.';
        ageError.style.display = 'block';
        hasError = true;
    }

    const radio1 = document.getElementById('radioOne').checked;
    const radio2 = document.getElementById('radioTwo').checked;
    
    if (!radio1 && !radio2) {
        genderError.textContent = 'Пожалуйста, укажите свой пол.';
        genderError.style.display = 'block';
        hasError = true;
    }

    if (validatePassword(passwordInput.value) === false) {
        passwordError.textContent = 'Используйте требуемый формат.';
        passwordError.style.display = 'block';
        hasError = true;
    }

    if (termsCheckbox.checked === false) {
        termsError.textContent = 'Подвердите согласие на обработку персональных данных.';
        termsError.style.display = 'block';
        hasError = true;
    }

    const submit = document.getElementById('submit');
    
    if (hasError) {
        submit.disabled = true;
    } else {
        submit.disabled = false;
    }

    if (hasError === false) {
        alert('Форма успешно отправлена!');
        form.reset();
    }

    console.log('Имя: ' + nameInput.value + ', email: ' + emailInput.value + ', возраст: ' + ageInput.value + ', возраст: ' 
    + genderInput.checked.value + ', пароль: ' + passwordInput.value + termsCheckbox.value);

});