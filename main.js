
const response = await fetch('./pokemons.json');
const pokemons = await response.json();

let pokemon = ""

function Elemento(i) {
  let tipos = " "
  for (let n = 0; n < pokemons[i].type.length; n++) {
  if (pokemons[i].type[n] == "bug") {
    tipos = tipos + `<p class="bicho">Bicho</p> `
  }
  if (pokemons[i].type[n] == "dark") {
    tipos = tipos + `<p class="siniestro">Siniestro</p> `
  }
  if (pokemons[i].type[n] == "dragon") {
    tipos = tipos + `<p class="dragon">Dragon</p> `
  }
  if (pokemons[i].type[n] == "electric") {
    tipos = tipos + `<p class="electrico">Electrico</p> `
  }
  if (pokemons[i].type[n] == "fairy") {
    tipos = tipos + `<p class="hada">Hada</p> `
  }
  if (pokemons[i].type[n] == "fighting") {
    tipos = tipos + `<p class="lucha">Lucha</p> `
  }
  if (pokemons[i].type[n] == "fire") {
    tipos = tipos + `<p class="fuego">Fuego</p> `
  }
  if (pokemons[i].type[n] == "flying") {
    tipos = tipos + `<p class="volador">Volador</p> `
  }
  if (pokemons[i].type[n] == "ghost") {
    tipos = tipos + `<p class="fantasma">Fantasma</p> `
  }
  if (pokemons[i].type[n] == "grass") {
    tipos = tipos + `<p class="pasto">Planta</p> `
  }
  if (pokemons[i].type[n] == "ground") {
    tipos = tipos + `<p class="tierra">Tierra</p> `
  }
  if (pokemons[i].type[n] == "ice") {
    tipos = tipos + `<p class="hielo">Hielo</p> `
  }
  if (pokemons[i].type[n] == "normal") {
    tipos = tipos + `<p class="normal">Normal</p> `
  }
  if (pokemons[i].type[n] == "poison") {
    tipos = tipos + `<p class="veneno">Veneno</p> `
  }
  if (pokemons[i].type[n] == "psychic") {
    tipos = tipos + `<p class="psiquico">Psiquico</p> `
  }
  if (pokemons[i].type[n] == "rock") {
    tipos = tipos + `<p class="roca">roca</p> `
  }
  if (pokemons[i].type[n] == "steel") {
    tipos = tipos + `<p class="hierro">Acero</p> `
  }
  if (pokemons[i].type[n] == "water") {
    tipos = tipos + `<p class ="agua">Agua</p> `
  }
  }
  return tipos
}

function Debil(i) {
  let debilidades = " "
  for (let n = 0; n < pokemons[i].weakness.length; n++) {
  if (pokemons[i].weakness[n] == "Bug") {
    debilidades = debilidades + `Bicho, `
  }
  if (pokemons[i].weakness[n] == "Dark") {
    debilidades = debilidades + `Siniestro, `
  }
  if (pokemons[i].weakness[n] == "Dragon") {
    debilidades = debilidades + `Dragon. `
  }
  if (pokemons[i].weakness[n] == "Electric") {
    debilidades = debilidades + `Electrico, `
  }
  if (pokemons[i].weakness[n] == "Fairy") {
    debilidades = debilidades + `Hada, `
  }
  if (pokemons[i].weakness[n] == "Fighting") {
    debilidades = debilidades + `Lucha, `
  }
  if (pokemons[i].weakness[n] == "Fire") {
    debilidades = debilidades + `Fuego, `
  }
  if (pokemons[i].weakness[n] == "Flying") {
    debilidades = debilidades + `Volador, `
  }
  if (pokemons[i].weakness[n] == "Ghost") {
    debilidades = debilidades + `Fantasma, `
  }
  if (pokemons[i].weakness[n] == "Grass") {
    debilidades = debilidades + `Planta, `
  }
  if (pokemons[i].weakness[n] == "Ground") {
    debilidades = debilidades + `Tierra, `
  }
  if (pokemons[i].weakness[n] == "Ice") {
    debilidades = debilidades + `Hielo, `
  }
  if (pokemons[i].weakness[n] == "Normal") {
    debilidades = debilidades + `Normal, `
  }
  if (pokemons[i].weakness[n] == "Poison") {
    debilidades = debilidades + `Veneno, `
  }
  if (pokemons[i].weakness[n] == "Psychic") {
    debilidades = debilidades + `Psiquico, `
  }
  if (pokemons[i].weakness[n] == "Rock") {
    debilidades = debilidades + `Roca, `
  }
  if (pokemons[i].weakness[n] == "Steel") {
    debilidades = debilidades + `Acero, `
  }
  if (pokemons[i].weakness[n] == "Water") {
    debilidades = debilidades + `Agua, `
  }
  }
  return debilidades
}

function motorDeBusqueda(tipo, dato){
  if (tipo == "string"){
    for (let i = 0; i < pokemons.length; i++){
      if (pokemons[i].name == dato || pokemons[i].slug == dato){
        return i
      }
    }
  }
  else {
    for (let i = 0; i < pokemons.length; i++){
      if (pokemons[i].id == dato){
        return i
      }
    }
  } 
}


for (let i = 0; i < pokemons.length; i++) {

  if (i == 0) {
    pokemon = pokemon + `<div type="button" class="btn btn-lg btn-gradient btn-light imagenes col" data-bs-toggle="popover" data-bs-title="${pokemons[i].name} - ${pokemons[i].number}" data-bs-content="Peso = ${pokemons[i].weight} Kg || Altura : ${pokemons[i].height} cm || Debilidades : ${Debil(i)} || Habilidades : [${pokemons[i].abilities}] "> 
      <img src="${pokemons[i].ThumbnailImage}"> 
      <p class="numero"> N°.${pokemons[i].number}</p>
      <h3 class="nombre"> ${pokemons[i].name}</h3>
      ${Elemento(i)} 
      </div>`

  }
  else {
    if (pokemons[i].ThumbnailImage == pokemons[i-1].ThumbnailImage){
    }
    else {
      pokemon = pokemon + `<div type="button" class="btn btn-lg btn-gradient btn-light imagenes col" data-bs-toggle="popover" data-bs-title="${pokemons[i].name} - ${pokemons[i].number}" data-bs-content="Peso = ${pokemons[i].weight} Kg || Altura : ${pokemons[i].height} cm || Debilidades : ${Debil(i)} || Habilidades : [${pokemons[i].abilities}] "> 
      <img src="${pokemons[i].ThumbnailImage}"> 
      <p class="numero"> N°.${pokemons[i].number}</p>
      <h3 class="nombre"> ${pokemons[i].name}</h3>
      ${Elemento(i)}    
      </div>`
    }
  }
}

document.getElementById("Cimagenes").innerHTML = pokemon

let busqueda = document.getElementById('search')
busqueda.addEventListener('change', (e) => {
    e.target.value;
})
const boton = document.getElementById("buscar")
buscar.addEventListener("click", (e) => {
    e.target.value;
    if ((Number(busqueda.value)) == 0){
    alert("Introduzca el nombre o numero de un pokemon")
    }
    else if ((Number(busqueda.value)) >= 1){
      
      let i = motorDeBusqueda("number", (Number(busqueda.value)))
      let pokemon = `<div class="imagenes col resultado"> 
      <img src="${pokemons[i].ThumbnailImage}"> 
      <p class="numero"> N°.${pokemons[i].number}</p>
      <h3 class="nombre"> ${pokemons[i].name}</h3>
      ${Elemento(i)}  
      </div>`
       document.getElementById("resultadoBusqueda").innerHTML = pokemon 
       

    }
    else {
      
      let i = motorDeBusqueda("string", busqueda.value)
      let pokemon = `<div class="imagenes col resultado"> 
      <img src="${pokemons[i].ThumbnailImage}"> 
      <p class="numero"> N°.${pokemons[i].number}</p>
      <h3 class="nombre"> ${pokemons[i].name}</h3>
      ${Elemento(i)}  
      </div>`
       document.getElementById("resultadoBusqueda").innerHTML = pokemon 

    }
})

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))


