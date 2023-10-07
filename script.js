let currentPokemon;
let CARD_LIMIT = []; //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
let cardIncrease = 'Wert/CARD_LIMIT push 20 oder so';

function calcCardLimit() {
  for (let i = 1; i <= 20; i++) {
    CARD_LIMIT.push(i);
  }
}

async function init() {
  //load first 20. Pokemons
  calcCardLimit();
  for (let i = 0; i < CARD_LIMIT.length; i++) {
    const id = CARD_LIMIT[i];
    let url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    let response = await fetch(url);
    currentPokemon = await response.json();
    document.getElementById('card-content-container').innerHTML += /*HTML auslagern*/ /*html*/ `
    <div class="card pokemon-card"> 
      <div class="pokemon-name-box">
        <span> ${capitalizeFirstLetter(currentPokemon['name'])}</span>
        <span>ID: ${addIdFormat(id)}</span>
    </div>
    <div class="pokemon-type-img-box">
      <div id="pokemon-type-box${id}" class="pokemon-type-box"></div>
      <img class="pokemon-content-image" src="${currentPokemon['sprites']['other']['home']['front_default']}">
    </div>
    </div>
    `;
    renderPokemonTypes('pokemon-type-box', id);
  }
  //console.log(currentPokemon);
}

async function loadPokemon() {}

function renderPokemonInfo() {
  document.getElementById('card-box').innerHTML = returnPokemonCard();
  document.getElementById('pokemon-name').innerHTML = capitalizeFirstLetter(currentPokemon['name']);
  document.getElementById('pokemon-image').src = currentPokemon['sprites']['other']['home']['front_default'];
  document.getElementById('pokemon-id').innerHTML = `#${addIdFormat(currentPokemon['id'])} `;
  renderPokemonTypes();
  renderAboutPokemon();
}

function capitalizeFirstLetter(string) {
  // Ersten Buchstaben vom String groß schreiben.
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function addIdFormat(id) {
  // ID soll immer im Format 000 dargestellt werden.
  return (prepended_number = String(id).padStart(3, '0'));
}

function renderAboutPokemon() {
  document.getElementById('pokemon-info-box').innerHTML = returnPokemonAbout();
  // return Charakteristik Funktion in js Template
}

function renderPokemonTypes(string, id) {
  //iteriert durch die verschiedenen Pokemon Typen und greift auf den jeweiligen Namen zu.
  for (let i = 0; i < currentPokemon['types'].length; i++) {
    const type = currentPokemon['types'][i]['type']['name'];
    document.getElementById(string + id).innerHTML += `<span>${capitalizeFirstLetter(type)}</span>`;
  }
}
