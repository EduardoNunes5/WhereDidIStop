import { post } from '../req/requests.js';

const $form = document.querySelector('.form');
const $signin = document.querySelector('#login');

$signin.addEventListener('click', (e)=>{
    e.preventDefault();
    window.location.href = './login.html';
})

$form.addEventListener('submit', async(e)=>{
    e.preventDefault();
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    const result = await post({name, email, password},null, 'signup');
    if(result.status === 201){
        window.location.href="./login.html"
    }
    if(result.status === 409){
        alert('Email já cadastrado! Tente novamente com outro email.')
        document.location.reload();
    }

})
