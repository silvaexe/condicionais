let idade = prompt("Qual a sua idade?");


idade = Number(idade);

function dirigir (idade) {
    if (idade >= 18) {
    console.log("Você pode dirigir");
    } else {
    console.log("Você não pode dirigir.");
    }
}  

dirigir(idade)

