function saldoFinal (lista) {
    let valorDepositos =0
    let saldofinal2 = 0
    for (item of lista){
        valorDepositos += item > 0 ? item:0
        saldofinal2 += item
    }
        let númeroNegativoOuPositivo = saldofinal2 > 0 ? "positivo" : "negativo"
       console.log(`O saldo final da sua conta foi ${númeroNegativoOuPositivo} no valor de R$ ${saldofinal2}.`)
       console.log(`O valor depositado foi de R$${valorDepositos}`)
       console.log(`O valor retirado foi de R$${valorDepositos - saldofinal2}`)
   }
   let lista = [100, -20, -30, 10, -7, -21, -5]
   saldoFinal(lista)