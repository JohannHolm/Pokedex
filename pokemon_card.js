function returnPokemonCard() {
  return `
<div class="card main-card rounded-5" id="main-card">
<div class="card-body">
    <div class="pokemon-card-top-navbar">
        <button onclick="closeCard()" class="btn  btn-secondary">Close</button>
        <button class="btn  btn-secondary">Like</button>
    </div>
    <div class="header-container">
        <div>
            <h2 id="pokemon-name"></h2>
            <div id="pokemon-elements"></div>
        </div>
        <p id="pokemon-id"></p>
    </div>
    <img id="pokemon-image" src="" alt="">
</div>
<div class="card info-box rounded-5">
    <div class="card-body">
        <div class="card-navbar">
            <div class="h5 fw-normal" onclick="renderAboutPokemon()">About</div>
            <div class="h5 fw-normal">Base Stats</div> <!--Template erstellen-->
            <div class="h5 fw-normal">Evolution</div> <!--Template erstellen-->
            <div class="h5 fw-normal">Moves</div> <!--Template erstellen-->
        </div>
        <div id="pokemon-info-box" class="pokmemon-informations">
        </div>
    </div>
</div>
</div>`;
}
