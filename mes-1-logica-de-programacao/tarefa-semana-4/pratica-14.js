function calcularMédiaRestaurante (){

let somaNotas = 0

lista.avaliacoes.forEach((avaliacao) => {
    somaNotas += avaliacao.nota;
})

let mediaRestaurante = somaNotas/lista.avaliacoes.length

console.log(`A média de avaliações do restaurante Turing Gourmet foi de ${mediaRestaurante.toFixed(2)}.`)
}


let lista = {
    restaurante: "Turing Gourmet",
    tipo: "Comida britânica",
    avaliacoes: [
      {
        cliente: "Thais S.",
        nota: 9.8
      },
      {
        cliente: "Thales Gonçalves",
        nota: 8.9
      },
      {
        cliente: "José Lopes",
        nota: 9.9
      },
      {
        cliente: "Cristina Souza",
        nota: 9.3
      },
      {
        cliente: "Leo Garcia",
        nota: 8.5
      }
    ]
  }

  calcularMédiaRestaurante(lista)