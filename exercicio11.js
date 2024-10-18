let turno = prompt("Digite o turno em que você estuda (M - Matutino, V - Vespertino, N - Noturno):");

function turnoDeEstudo(turno) {
    switch  (turno) {

        case  "M":
            console.log("Bom Dia!")
        break;
        case  "V":
            console.log("Boa Tarde!")
        break;
        case  "N":
            console.log("Boa Noite!")
        break;
        
    }
}

turnoDeEstudo(turno);

