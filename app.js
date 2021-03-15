const form = document.getElementById('form');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');

// Error message
function showError(input, message) {
   const formControl = input.parentElement;
   formControl.className = 'form-control error';
   const small = formControl.querySelector('small');
   small.innerText = message;
}
  
// Success message
function showSuccess(input) {
   const formControl = input.parentElement;
   formControl.className = 'form-control success';
}

// Check first name if its length greater than 4 and lesser than 20 characters
const checkFirstName = (input, min, max) => {
    if(input.value === ''){
        showError(input,'First name cannot be empty');
    }else if(input.value.length < min){
        showError(input,'The length must be greater')
    }else if(input.value.length > max){
        showError(input,'The length must be lesser')
    }else{
        showSuccess(input);
    }
}

// Check last name if its length greater than 4 and lesser than 20 characters
const checkLastName = (input, min, max) => {
    if(input.value === ''){
        showError(input,'Last name cannot be empty');
    }else if(input.value.length < min){
        showError(input,'The length must be greater')
    }else if(input.value.length > max){
        showError(input,'The length must be lesser')
    }else{
        showSuccess(input);
    }
}

// Check email
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(input.value === ''){
        showError(input, 'Looks like this is not an email')
    }else if (re.test(input.value.trim())) {
        showSuccess(input);
    }else{
        showError(input, 'Email is not valid');
    }
}

// Check password if it is greater than 6 and lesser than 25
const checkPassword = (input, min, max) => {
    if(input.value === ''){
        showError(input, 'Password cannot be empty');
    }else if(input.value.length < min){
        showError(input,'The length must be greater')
    }else if(input.value.length > max){
        showError(input,'The length must be lesser')
    }else{
        showSuccess(input);
    }
}


// Event listener
form.addEventListener('submit', e => {
    e.preventDefault();

    checkFirstName(firstName, 4, 20);
    checkLastName(lastName, 4, 20);
    checkEmail(email);
    checkPassword(password, 6, 25);
})