const URLbase='https://rickandmortyapi.com/api/'
const endPointPersonajes='character?page=1'
let urlCompleta = `${URLbase}${endPointPersonajes}`
const contenedor= document.getElementById('container')
const anterior = document.getElementById('anterior')
const siguiente = document.getElementById('siguiente')
let urlSiguiente = ""
let urlAnterior = ""
let inputBuscar = document.getElementById('buscar')
let btnBuscar = document.getElementById('btnBuscar')

const getPersonajes = (urlEntera) => {
    fetch(urlEntera)
    .then(response=>response.json())
    .then(data=>mostrarPersonajes(data))
    .catch(error=>console.log(error))
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

const buscar = () => {
 console.log(inputBuscar.value)
 let personajeABuscar = inputBuscar.value
 urlCompleta= `${URLbase}character?name=${personajeABuscar}`
 getPersonajes(urlCompleta)
};

siguiente.addEventListener('click',siguientePagina)
anterior.addEventListener('click',anteriorPagina)
btnBuscar.addEventListener('click', buscar)