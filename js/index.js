import { get } from './req/requests.js';
import lista from './components/content.js';


const $add = document.querySelector('#add');
const $logout = document.querySelector('#logout');
const token = sessionStorage.getItem('token');
if(!token){
    window.location.href = '/login.html';
}
else{
    $add.hidden = false;
    $logout.hidden = false;
    $logout.addEventListener('click', logout);
    $add.addEventListener('click', addContent);
    get(`Bearer ${token}`, '/contents')
    .then(result => {
        if(result.status == 200)
            return result.json()
        else
            return [];
    })
    .then(json => {
        render(lista(json))
    })
    .catch(err => console.log(err));
}


function render(template){
    console.log('template::: ', template);
    const $contents = document.querySelector('#contents');
    const $ul = document.querySelector('#content_list');
    $ul.innerHTML = template;

}


function addContent(e){
    window.location.href= '/addConteudo.html';
}

function logout(e){
    sessionStorage.removeItem('token');
    location.reload();
}
