const jokeUrl = 'https://api.chucknorris.io/jokes/random';
const urlUsuarios = 'https://reqres.in/api/users?page=2';

// fetch(jokeUrl)
//    .then (resp => {  
//     resp.json().then( ({value}) => {
//         console.log(value);
//     });
// })

// fetch( jokeUrl )
//     .then(resp => resp.json())
//     .then( ({id, value}) => {
//         console.log(id, value);
//     } )

const obtenerChiste = async() => {

    try {
        
        const resp = await fetch(jokeUrl);
        
        if(!resp.ok) throw ('Nose pudo :C');
        
        const {id, value} = await resp.json();
        
        return {id, value};
        
        
    } catch (err) {
        
        throw err;
    }
}

const obtenerUsuarios = async() => {
    const resp = await fetch(urlUsuarios);
    const { data:usuarios } = await resp.json();

    return (usuarios);
}

const urlAPI = 'https://db.ygoprodeck.com/api/v7/cardinfo.php';
const obtenerDatos = async() => {
    const resp = await fetch(urlAPI);
    const {data:usuarios} = await resp.json();

    console.log(usuarios);
}

export {
    obtenerChiste,
    obtenerUsuarios,
    obtenerDatos

}