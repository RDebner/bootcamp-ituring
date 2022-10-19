function dadosDaPessoa (peso,altura){
    let altura2 = altura*altura
    let indicemc = peso/altura2
    let indicemc2 = indicemc.toFixed(1)
    return indicemc2
   
}

let indicedemassacorporal = dadosDaPessoa(70,1.70)
console.log(indicedemassacorporal)

function calculoImc () {
    if (indicedemassacorporal<18.5){
        console.log("Abaixo do peso")
    } else if (18.5<indicedemassacorporal && indicedemassacorporal<=25.0) {
        console.log("Peso Normal")
    } else if (25.0<indicedemassacorporal && indicedemassacorporal<30) {
        console.log("Acima do peso")
    } else if (30<indicedemassacorporal){
        console.log("Obesidade")
    } else {
    }
}

calculoImc(indicedemassacorporal)