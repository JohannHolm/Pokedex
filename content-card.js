function returnContentCard(i, id) {
  return `
    <div id="card-background${i}" class="card pokemon-card" onclick="openPokemon(${id})"> 
      <div class="pokemon-name-box">
        <span class="fs-3 fw-normal"> ${capitalizeFirstLetter(currentPokemon['name'])}</span>
        <span class="fst-italic">ID: ${addIdFormat(id)}</span>
    </div>
    <div class="pokemon-type-img-box">
      <div id="pokemon-type-box${id}" class="pokemon-type-box"></div>
      <img class="pokemon-content-image" src="${currentPokemon['sprites']['other']['home']['front_default']}">
    </div>
    </div>
    
    `;
}
