
const post = async(payload, token, endpoint)=>{
    return await fetch(`http://wherehaveistopped.herokuapp.com/api${endpoint}`,{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': token
        },
        body: JSON.stringify(payload)
    })
}

const get = async(token, endpoint)=>{
    return await fetch(`http://wherehaveistopped.herokuapp.com/api${endpoint}`,{
        headers:{
            'Content-Type': 'application/json',
            'authorization': token
        }
    });

}

export { post, get };
