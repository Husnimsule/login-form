const sign_in_btn = document.querySelector('#sign-in-button');
const sign_up_btn = document.querySelector('#sign-up-button');
const container = document.querySelector('.container');

const Form = document.querySelector('#create-account-form');
const usernameInput = document.querySelector('#username');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');

sign_up_btn.addEventListener('click', () => {
    container.classList.add('sign-up-mode');
});
sign_in_btn.addEventListener('click', () => {
    container.classList.remove('sign-up-mode');
});

form.addEventListener('submit', (event) =>{
event.preventDefault ();

validateForm();
});

function validateForm(){
    //username
    
    //email
    //password
}