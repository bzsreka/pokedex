var pokemons = [
    {
        "id": 1,
        "name": "Bulbasaur",
        "type": [ "grass", "poison" ],
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
    },
    {
        "id": 5,
        "name": "Charmeleon",
        "type": [ "fire" ],
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"
    },
    {
        "id": 15,
        "name": "Beedrill",
        "type": [ "bug", "poison" ],
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png"
    },
    {
        "id": 193,
        "name": "Yanma",
        "type": [ "bug", "flying" ],
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/193.png"
    },
    {
        "id": 152,
        "name": "Chikorita",
        "type": [ "grass" ],
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/152.png"
    }
]
function renderPokemon() {

    pokemons.forEach(function (pokemon) {
       	let li = document.createElement('li');
        let div = document.createElement('div');
        let img = document.createElement('img');
        img.src = pokemon.sprite;
        img.alt = pokemon.name;
		
	li.appendChild(div).appendChild(img);
    document.querySelector('main ul').appendChild(li);
    });

}
renderPokemon();



