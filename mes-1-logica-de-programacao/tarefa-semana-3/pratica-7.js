function saldoFinal (lista) {
 let saldofinal = 0
 for (item of lista)
    saldofinal += item
    let númeroNegativoOuPositivo = saldofinal > 0 ? "positivo" : "negativo"
    console.log(`O saldo final da sua conta foi ${númeroNegativoOuPositivo} no valor de R$ ${saldofinal}.`)
}
let lista = [100, -20, -30, 10, -7, -21, -5]
saldoFinal(lista)
