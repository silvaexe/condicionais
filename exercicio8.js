const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)

//* A primeira linha do  código é uma função que pede um número ao usuário e atribui a ele a variável numero . *//

//* Se o usuário digitou 10, será  impresso a mensagem "Esse número passou no teste" e , se o número for -10 , será impresso nada, pois não passou no teste. *//

//* O código sempre resultará em um erro ao tentar acessar a variável mensagem fora do bloco do if, devido à sua declaração com let e ao escopo de bloco. *//





