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
    const elements = document.querySelectorAll('#content_list li');
    const actionBtns = document.querySelectorAll('.btn_action');
    elements.forEach(element =>{
        actionBtns.forEach( btn =>{
            btn.addEventListener('click', (e) => btnEvent(e,token , element.getAttribute('id')));
        })
    })
}


async function btnEvent(e, token, elementId){
    console.log('id:: ', elementId)
    const result = await del(token, `/${elementId}`);
    if(result.status === 200)
        window.location.reload();
}
export default lista;
