let quantidadeDeDesconto = (valorDoProduto,porcentagemDeDesconto) => {
    valorDoProduto = 100
    let min = 1
    let max = 100
    porcentagemDeDesconto = Math.random()*(max-min) + 1
    let desconto = porcentagemDeDesconto
    let desconto2 = parseInt(desconto)
    console.log(`${desconto2}%`)
    let calculo = valorDoProduto/100
    let calculo2 = calculo*desconto2
console.log(calculo2)
}
quantidadeDeDesconto()