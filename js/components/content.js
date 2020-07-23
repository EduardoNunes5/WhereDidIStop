import { del } from '../req/requests.js';


const lista = (contents)=>{

    return contents.map(content =>{
        content.finished = content.finished === true ? 'sim' : 'não'
        console.log(content)
        return `<li id="${content.id}">
            <p>Plataforma: ${content.platform}</p>
            <p>Título: ${content.title}</p>
            <p>Onde parou: ${content.stoppedPoint}</p>
            <p>Finalizado: ${content.finished}</p>
            <div class="button">
            <button class="btn_action" id="edit" type="input">Editar</button>
            <button class="btn_action" id="delete" type="input">Remover</button>
            </div>
            </li>`
    }).join(' ');

}

export function buttonHandler(token){
    const listElements = document.querySelectorAll('#content_list li');
    const actionBtns = document.querySelectorAll('.btn_action');


    actionBtns.forEach( btn =>{
        btn.addEventListener('click', (e) =>{
            const parentId = btn.parentNode.parentNode.getAttribute('id');
            delRequest(e, token, parentId);
        })
    })
}



async function delRequest(e, token, elementId){
    console.log('id:: ',elementId)
    const result = await del(token, `/${elementId}`);
    console.log(result);
    if(result.status === 200)
        window.location.href = './index';
}
export default lista;
