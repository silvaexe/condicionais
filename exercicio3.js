function compararNumeros(num1,num2) {
    if(  num1 === num2 ){
        return "São iguais";
    } else if  (num1 > num2) {
        return " é maior ";
        } else { 
            return " é menor ";
        }

}


let  num1 = prompt("Digite um numero")
let  num2 = prompt("Digite outro numero")
console.log(compararNumeros (num1,num2));