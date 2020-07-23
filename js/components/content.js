
const lista = (contents)=>{

    return contents.map(content =>{
        content.finished = content.finished === true ? 'sim' : 'não'
        if(content.episode)
            return `<li>
                <p>Plataforma: ${content.platform}</p>
                <p>Título: ${content.title}</p>
                <p>Episódio: ${content.episode}</p>
                <p>Finalizado: ${content.finished}</p>
                </li>`
        else{
            return `<li>
                <p>Plataforma: ${content.platform}</p>
                <p>Título: ${content.title}</p>
                <p>Página: ${content.page}</p>
                <p>Finalizado: ${content.finished}</p>
                </li>`
        }
    }).join(' ');

}

export default lista;
