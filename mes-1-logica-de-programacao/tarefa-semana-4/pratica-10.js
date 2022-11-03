let lista = [{
    valor: 100.00,
    movimentacao: "deposito",
    dataMovimentacao: "2021-08-02T07:46:36.611Z"
  },
  {
    valor: 20.00,
    movimentacao: "retirada",
    dataMovimentacao: "2021-09-17T09:46:36.611Z"
  },
  {
    valor: 30.00,
    movimentacao: "retirada",
    dataMovimentacao: "2022-02-24T09:46:36.611Z"
  },
  {
    valor: 10.00,
    movimentacao: "deposito",
    dataMovimentacao: "2022-03-02T09:46:36.611Z"
  },
  {
    valor: 7.00,
    movimentacao: "retirada",
    dataMovimentacao: "2022-04-20T09:46:36.611Z"
  },
  {
    valor: 21.00,
    movimentacao: "retirada",
    dataMovimentacao: "2022-03-20T09:46:36.611Z"
  },
  {
    valor: 5.00,
    movimentacao: "retirada",
    dataMovimentacao: "2022-06-08T09:46:36.611Z"
  }]

  function exibeValorFinal () {
    let valorFinal = 0
    for (item of lista)
    if (item.movimentacao === "deposito"){
        valorFinal += item.valor
    }else if (item.movimentacao === "retirada"){
        valorFinal -= item.valor
    }

    function positivoOuNegativo(){
      return  valorFinal > 0 ? "positivo" : "negativo"  
    }
    positivoNegativo = positivoOuNegativo(valorFinal)
  
   console.log(`O saldo final de sua conta foi ${positivoNegativo} no valor de R$ ${valorFinal}.`)
}

   


  exibeValorFinal(lista)