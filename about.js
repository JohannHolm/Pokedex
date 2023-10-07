function returnPokemonAbout() {
  return `
<table class="table">
    <tr>
        <td>Description</td>
        <td>Charakteristik</td><!--https://pokeapi.co/api/v2/characteristic/{id}/-->
    </tr>
    <tr>
        <td>Height</td>
        <td>inch und cm</td>
    </tr>
    <tr>
        <td>Weight</td>
        <td>lbs und kg</td>
    </tr>

    <tr><td class="about-section-2-headline h5">Breeding</td></tr>

    <tr>
        <td>Gender</td><!--https://pokeapi.co/api/v2/gender/{id or name}/-->
        <td>Geschlecht</td>
    </tr>
    <tr>
        <td>Egg Groups</td>
        <td>string</td><!--https://pokeapi.co/api/v2/egg-group/{id or name}/-->
    </tr>
</table>
`;
}
