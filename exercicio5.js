let concluiuEbsinoMedio = prompt('Concluiu o Ensino  Médio? Digite "S"  para Sim e "N" para Não');
let Idade = prompt ('Quantos você tem ?');
let fazFAculdade =  prompt ('Você faz faculdade?Digite "S"  para Sim e "N" para Não');

function podeMatricular(concluiuEbsinoMedio,Idade,fazFAculdade) {
    if(concluiuEbsinoMedio == "S" && Idade >= 18  && fazFAculdade ==
    "N ")  {
    return 'Pode  se matricular';
    }  else {
    return 'Não pode se matricular';
    }



}

podeMatricular(concluiuEbsinoMedio,Idade,fazFAculdade)
console.log (podeMatricular(concluiuEbsinoMedio,Idade ,fazFAculdade))


