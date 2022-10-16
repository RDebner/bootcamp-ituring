function numeroAleatório () {
    const min = 0
    const max = 10000
    const numero = Math.random()*(max - min) + 1
    const numeroInteiro = parseInt(numero)
    return numeroInteiro;
}
console.log(numeroAleatório())