import { post } from './req/requests.js';


const token = sessionStorage.getItem('token');
if(!token){
    window.location.href = 'login.html';
}
const $logout = document.querySelector('#logout');
const $contentType = document.querySelector('.content_type')
const $hideable = document.querySelectorAll('.hideable');
const $form = document.querySelector('.form');

$logout.hidden = false;
$logout.addEventListener('click', logout);


$form.addEventListener('submit', async(e)=>{
    e.preventDefault();
    const payload = getPayload();
    console.log('payload::: ', payload)

    const result = await post(payload, `Bearer ${token}`, '/contents')
    if(result.status === 201){
        window.location = './index.html';
    }
    else{
        window.location.href = './addConteudo.html';
    }
})

function getPayload(){
    const platform = document.querySelector('#platform').value;
    const title = document.querySelector('#title').value;
    const finished = document.querySelector('#finished').checked;
    const stoppedPoint = document.querySelector('#stoppedPoint').value;
    return {platform, title, finished, stoppedPoint}
}






function logout(e){
    sessionStorage.removeItem('token');
    window.location.href='/index';
}
