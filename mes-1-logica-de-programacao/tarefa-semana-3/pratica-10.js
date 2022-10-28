function votos (lista) {
    let qntdDeVotosBrasil = 0
    let qntdDeVotosArgentina = 0
    let qntdDeVotosEspanha = 0
    let qntdDeVotosPortugal = 0
    for(let i = 0;i < lista.length ; i++)
       if (lista[i] == 1) {
        qntdDeVotosBrasil = qntdDeVotosBrasil + 1
       } else if (lista[i] == 2) {
        qntdDeVotosArgentina = qntdDeVotosArgentina + 1
       } else if (lista[i] == 3) {
        qntdDeVotosEspanha = qntdDeVotosEspanha + 1
       }else if (lista[i] == 4) {
        qntdDeVotosPortugal = qntdDeVotosPortugal+ 1
       } 

function maiorQuantidadeDeVotos(qntdDeVotosBrasil,qntdDeVotosArgentina,qntdDeVotosEspanha,qntdDeVotosPortugal){
    if (qntdDeVotosBrasil >= qntdDeVotosArgentina && qntdDeVotosBrasil >= qntdDeVotosEspanha && qntdDeVotosBrasil >= qntdDeVotosPortugal) {
        return "Brasil"
    } else if (qntdDeVotosArgentina >= qntdDeVotosEspanha && qntdDeVotosArgentina >= qntdDeVotosPortugal){
        return "Argentina"
    } else if (qntdDeVotosEspanha >= qntdDeVotosPortugal) {
        return "Espanha"
    } else {
        return "Portugal"
    }
}
    let timePreferido = maiorQuantidadeDeVotos(qntdDeVotosBrasil,qntdDeVotosArgentina,qntdDeVotosEspanha,qntdDeVotosPortugal)
       console.log (`Brasil : ${qntdDeVotosBrasil} voto(s)`)
       console.log (`Argentina : ${qntdDeVotosArgentina} voto(s)`)
       console.log (`Espanha : ${qntdDeVotosEspanha} voto(s)`)
       console.log (`Portugal : ${qntdDeVotosPortugal} voto(s)`)
       
       
       console.log ("Resultado:")
       console.log (`${timePreferido} é o preferido para ganhar a Copa do Mundo!`)

    
}

console.log(votos([1, 1, 1, 4, 4, 2, 3, 2]))

