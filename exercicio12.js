let generoFilme = prompt("Qual o gênero do filme que você vai assistir?");


let precoIngresso = Number(prompt("Qual o preço do ingresso?"));

function filme (generoFilme,precoIngresso) {
    

    if (generoFilme === "fantasia" && precoIngresso < 15) {
    console.log("Bom filme!");
    } else {
    console.log("Escolha outro filme :(");
    }
}

 filme(generoFilme, precoIngresso);