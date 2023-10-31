function returnPokemonAboutHTML() {
  return `
<table class="table">
    <!--<tr>
        <td>Description</td>
        <td id="pokemon-character">loading...</td><!--https://pokeapi.co/api/v2/characteristic/{id}/
    </tr>-->
    <tr>
        <td>Height</td>
        <td id="pokemon-height">loading...</td>
    </tr>
    <tr>
        <td>Weight</td>
        <td id="pokemon-weight">loading...</td>
    </tr>

    <!--<tr><td class="about-section-2-headline h5">Breeding</td></tr>

    <tr>
        <td>Best Stat</td>
        <td id="pokemon-best-stat">loading...</td>
    </tr>
    <tr>
        <td>Habitat</td>
        <td id="pokemon-habitat">loading...</td><!--https://pokeapi.co/api/v2/pokemon-species/{id or name}/ ##habitat - name##
    </tr>
</table>
`;
}
