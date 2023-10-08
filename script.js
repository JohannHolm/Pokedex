let currentPokemon;
let CARD_LIMIT = []; //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
let loadMore;
const BACKGROUND_COLORS = {
  normal: 'rgb(168, 167, 122, 0.5)',
  fire: 'rgb(238, 129, 48, 0.5)',
  water: 'rgb(99, 144, 240, 0.5)',
  electric: 'rgb(247, 208, 44, 0.5)',
  grass: 'rgb(122, 199, 76, 0.5)',
  ice: 'rgb(150, 217, 214, 0.5)',
  fighting: 'rgb(194, 46, 40, 0.5)',
  poison: 'rgb(163, 62, 161, 0.5)',
  ground: 'rgb(226, 191, 101, 0.5)',
  flying: 'rgb(169, 143, 243, 0.5)',
  psychic: 'rgb(249, 85, 135, 0.5)',
  bug: 'rgb(166, 185, 26, 0.5)',
  rock: 'rgb(182, 161, 54, 0.5)',
  ghost: 'rgb(115, 87, 151, 0.5)',
  dragon: 'rgb(111, 53, 252, 0.5)',
  dark: 'rgb(112, 87, 70, 0.5)',
  steel: 'rgb(183, 183, 206, 0.5)',
  fairy: 'rgb(214, 133, 173, 0.5)',
};

function calcCardLimit() {
  for (let i = 1; i <= 16; i++) {
    CARD_LIMIT.push(i);
  }
}

async function init() {
  //load first 20. Pokemons
  calcCardLimit();
  getJsonFromLocalStorage();
  for (let i = 0; i < CARD_LIMIT.length; i++) {
    const id = CARD_LIMIT[i];
    let url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    let response = await fetch(url);
    currentPokemon = await response.json();
    document.getElementById('card-content-container').innerHTML += returnContentCard(i, id);
    renderPokemonTypes('pokemon-type-box', id);
    setBackgroundColor('card-background', i);
    saveResponse(id);
  }
}

function saveResponse(id) {
  localStorage.setItem(`${id}`, JSON.stringify(currentPokemon));
}

function getJsonFromLocalStorage(id) {
  let object = localStorage.getItem(id);
  return JSON.parse(object);
}

//Onclick - große Detail Karte
function openPokemon(id) {
  document.getElementById('card-box').classList.remove('d-none');
  renderPokemonInfo(id);
}

function renderPokemonInfo(id) {
  // große Detail Karte
  document.getElementById('card-box').innerHTML = returnPokemonCard();
  document.getElementById('pokemon-name').innerHTML = capitalizeFirstLetter(getJsonFromLocalStorage(id)['name']);
  document.getElementById('pokemon-image').src = getJsonFromLocalStorage(id)['sprites']['other']['home']['front_default'];
  document.getElementById('pokemon-id').innerHTML = `#${addIdFormat(getJsonFromLocalStorage(id)['id'])} `;
  renderPokemonTypesCard(getJsonFromLocalStorage(id));
  renderAboutPokemon();
  setBackgroundColorOpenCard(getJsonFromLocalStorage(id), 'main-card');
}

function closeCard() {
  // Die Karte soll beim klicken auf den Body geschlossen werden, alternativ close Button erstellen.
  document.getElementById('card-box').classList.add('d-none');
}

function extractIdFromJson(json) {
  return json['id'];
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
//types für die onclick Karte iterieren
function renderPokemonTypesCard(json) {
  for (let i = 0; i < json['types'].length; i++) {
    const type = json['types'][i]['type']['name'];
    document.getElementById('pokemon-elements').innerHTML += `<span>${capitalizeFirstLetter(type)}</span>`;
  }
}

function setBackgroundColor(card, id) {
  const toptype = currentPokemon['types'][0]['type']['name'];
  document.getElementById(card + id).style.backgroundColor = BACKGROUND_COLORS[toptype];
}

function setBackgroundColorOpenCard(json, card) {
  const toptype = json['types'][0]['type']['name'];
  document.getElementById(card).style.backgroundColor = BACKGROUND_COLORS[toptype];
}
