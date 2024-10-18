let turno = prompt("Digite o turno em que você estuda (M - Matutino, V - Vespertino, N - Noturno):");

function turnoDeEstudo(turno) {
    

   if (turno === "M") {
    console.log("Bom Dia!");
   } else if (turno === "V") {
    console.log("Boa Tarde!");
   } else if (turno === "N") {
    console.log("Boa Noite!");
   } 
}

turnoDeEstudo(turno);