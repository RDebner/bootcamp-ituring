function diaDaSemana (numeroDoDia){
    switch (numeroDoDia) {
        case 1 :
            console.log("segunda")
            break;
        case 2 :
            console.log("terça")
            break;
        case 3 :
            console.log("quarta")
            break;
        case 4 :
            console.log("quinta")
            break;
        case 5 :
            console.log("sexta")
            break;
        case 6 : 
            console.log("sábado")
            break;
        case 7 :
            console.log("domingo")
            break;
        case 8 :
            console.log(`O número ${numeroDoDia} não é válido para dia de semana`)

    }
}

diaDaSemana(numeroDoDia = 6)