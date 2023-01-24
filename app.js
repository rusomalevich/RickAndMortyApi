// BASE URL 
// GET => traer
// POST => enviar y guardar
// PUT => modificar
// DELETE => borrar

/*
//Asincronismo
console.log("hola")
//el fetch pide los datos
fetch("https://rickandmortyapi.com/api/character")
.then(response=>response.json()) //convierto de JSON a objeto
.then(data=>console.log(data.results))
.catch(error=>console.log(error)) //si hubo algun error
.finally(()=>console.log('finalizo la conexion a la api'))

console.log("chau") //es ejecutado primero porque está en mi pc. El Fetch

//ASYNC y AWAIT para poder ejecutar código esperando respuesta de la API
*/
const URLbase='https://rickandmortyapi.com/api/'
const endPointPersonajes='character?page=1'
let urlCompleta = `${URLbase}${endPointPersonajes}`
const contenedor= document.getElementById('container')
const anterior = document.getElementById('anterior')
const siguiente = document.getElementById('siguiente')
let urlSiguiente = ""
let urlAnterior = ""

//con esta linea guardo todo lo que tiene ID en la constante queryID
const queryID=(id)=>document.getElementById(id)

const getPersonajes = (urlEntera) => {
    //fetch(`${URLbase}${endPointPersonajes}`)
    fetch(urlEntera)
    .then(response=>response.json()) //convierto de JSON a objeto
    //.then(dataCompleta=>console.log(dataCompleta)) //Array de objetos
    .then(data=>mostrarPersonajes(data)) //Array de objetos
    .catch(error=>console.log(error)) //si hubo algun error
    .finally(()=>console.log('finalizo la conexion a la api'))
};

getPersonajes(urlCompleta)

const mostrarPersonajes = (objetoCompleto) => {
    urlSiguiente = objetoCompleto.info.next
    urlAnterior = objetoCompleto.info.prev
    let personajes = objetoCompleto.results
    contenedor.innerHTML=" "
    for (const personaje of personajes) {
        
        contenedor.innerHTML+=`<div class="card" style="width: 18rem;">
        <img src="${personaje.image}" class="card-img-top" alt="">
        <div class="card-body">
          <h5 class="card-title">${personaje.name}</h5>
          <p class="card-text">${personaje.status}</p>
          <p class="card-text">${personaje.status}</p>
        </div>
      </div>`
    }
};

const siguientePagina = () => {
    getPersonajes(urlSiguiente)
};

const anteriorPagina = () => {
    getPersonajes(urlAnterior)
};

//anteriorPagina()

//siguientePagina()

siguiente.addEventListener('click',siguientePagina)
anterior.addEventListener('click',anteriorPagina)