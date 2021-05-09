const form = document.getElementById('form');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', e =>{
    e.preventDefault();
    checkInputs();
});

function checkInputs(){
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if(firstNameValue === ''){
        setErrorFor(firstName, 'First Name cannot be empty');
    }
    if(lastNameValue === ''){
        setErrorFor(lastName, 'Last Name cannot be empty');
    }
    if(emailValue === ''){
        setErrorFor(email, 'Email Name cannot be empty');
    }else if(!checkEmail(emailValue)){
        setErrorFor(email, 'Looks like this is not an email');
    }
    if(passwordValue === ''){
        setErrorFor(password, 'Password cannot be empty');
    }
}

function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small= formControl.querySelector('small');

    formControl.className = 'form-control error';
    small.innerText = message;
}

function checkEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function removeError(el){
    const formControl = el;
    formControl.className = 'form-control';
}

window.myFunction = function(event){
    document.querySelectorAll('input.active').forEach(function(item) {
        item.classList.remove('active');
      })
        event.target.classList.add("active");
};