function tipoDePokemon(pokemon) {
    switch (pokemon) {
        case "Bulbassauro":
          console.log('Planta e Veneno')
          break;
        case "Charmander":
            console.log('Fogo')
            break;
        case "Squirtle":
            console.log(' Àgua')
            break;
        default:
            console.log('Pokemon não  encontrado')

    }        
      
}

let pokemon = prompt("Digite o nome de um Pokémon");
console.log(tipoDePokemon(pokemon));