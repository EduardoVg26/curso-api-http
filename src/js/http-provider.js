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

const cloudPreset = 'eurgi7ch';
const cloudUrl = 'https://api.cloudinary.com/v1_1/dqcnggm7i/upload';

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

const subirImagen = async(archivoSubir) => {

    const formData = new FormData();
    formData.append('upload_preset', cloudPreset);
    formData.append('file', archivoSubir);

    try {

        const resp = await fetch(cloudUrl, {
            method: 'POST',
            body: formData
        });

        if(resp.ok) {
            const cloudResp = await resp.json();
            return cloudResp.secure_url;
        } else {
            throw await resp.json();
        }
        
    } catch (err) {
        throw err;
    }
}

export {
    obtenerChiste,
    obtenerUsuarios,
    obtenerDatos,
    subirImagen

}