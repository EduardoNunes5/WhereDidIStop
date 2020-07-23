import { get } from './req/requests.js';
import lista from './components/content.js';
import { buttonHandler } from './components/content.js'


const $add = document.querySelector('#add');
const $logout = document.querySelector('#logout');
const token = sessionStorage.getItem('token');
if(!token){
    window.location.href = './login.html';
}

async function main(){
    $add.hidden = false;
    $logout.hidden = false;
    $logout.addEventListener('click', logout);
    $add.addEventListener('click', addContent);
    try{
        const result = await get(`Bearer ${token}`, '/contents');
        if(result.status == 200){
            const json = await result.json();
            render(lista(json))
            buttonHandler(`Bearer ${token}`)
        }
    }
    catch(err){
        console.log(err);
    }
}


function render(template){
    const $contents = document.querySelector('#contents');
    const $ul = document.querySelector('#content_list');
    $ul.innerHTML = template;

}


function addContent(e){
    window.location.href= './addConteudo.html';
}

function logout(e){
    sessionStorage.removeItem('token');
    window.location.href = './index';
}

main();
