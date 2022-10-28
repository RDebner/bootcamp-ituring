function extratoCompleto (lista) {
    let saldoFinal = 0
    let totalDepositos = 0
    let qtdDepositos = 0
    let qtdRetiradas = 0

    for (item of lista) {
        const depositos = item > 0
        qtdDepositos += depositos ? 1 : 0
        qtdRetiradas += !depositos ? 1 : 0
        totalDepositos += depositos ? item : 0
        saldoFinal += item
    }
    const númeroNegativoOuPositivo = saldoFinal > 0 ? "positivo" : "negativo"

    console.log(`Número de depósitos: ${qtdDepositos}`)
    console.log(`Número de retiradas: ${qtdRetiradas}`)
    console.log(`O valor total depositado foi de: R$ ${totalDepositos}`)
    console.log(`O saldo final de sua conta foi ${númeroNegativoOuPositivo} no valor de R$ ${saldoFinal}`)
    console.log(`O valor total retirado foi de: R$ ${totalDepositos - saldoFinal}`)
}

let listaDepositosRetiradas = [100, -20, -30, 10, -7, -21, -5]
extratoCompleto(listaDepositosRetiradas)