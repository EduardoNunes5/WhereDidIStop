import { post } from './req/requests.js';


const token = sessionStorage.getItem('token');
if(!token){
    window.location.href = 'login.html';
}
const $logout = document.querySelector('#deslogar');
$logout.hidden = false;
$logout.addEventListener('click', logout);







function logout(e){
    sessionStorage.removeItem('token');
    window.location.href='/index';
}
