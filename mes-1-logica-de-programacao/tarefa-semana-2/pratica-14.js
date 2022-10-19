function imc (peso){
    altura = 1.70
    altura2 = altura*altura
    let indicemc = peso/altura2
    let indicemc2 = indicemc.toFixed(1)
    console.log(indicemc2)
    if (indicemc2<18.5){
        console.log("Abaixo do peso")
    } else if (18.5<indicemc2 && indicemc2<=25.0) {
        console.log("Peso Normal")
    } else if (25.0<indicemc2 && indicemc2<30) {
        console.log("Acima do peso")
    } else if (30<indicemc2){
        console.log("Obesidade")
    } else {
    }
}
imc(peso = 70)
 