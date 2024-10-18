let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)


//* O codigo serve  para calcular o preço de uma fruta escolhida pelo usuario, com base em um switch case .*//

//* Se o valor da fruta for Maçã sera impresso a mensagem 'O preço da fruta  Maçã  é  R$  2.25'. *//

//* Se o break acima do default for retirado, e o usuário escolher "Pêra"  o preço sera impresso como 5.5, pois o default sera executado. *//