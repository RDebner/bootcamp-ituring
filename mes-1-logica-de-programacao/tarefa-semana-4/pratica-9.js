let listaFilmes = [{
    titulo: "Um Sonho de Liberdade",
    notaAvaliacao: 9.2,
    duracao: 142,
    anoPublicacao: 1994,
    categoria: "Drama"
  },
  {
    titulo: "Clube da Luta",
    notaAvaliacao: 8.7,
    duracao: 139,
    anoPublicacao: 1999,
    categoria: "Drama"
  },
  {
    titulo: "Toy Story 3",
    notaAvaliacao: 8.3,
    duracao: 103,
    anoPublicacao: 2010,
    categoria: "Animação"
  }]

  function exibirFilmeMaiorNota (listaFilmes) {
    let maiorNota 
    let filmeComMaiorNota
    for(let i = 0;i < listaFilmes.length ; i++) 
    if(listaFilmes[0].notaAvaliacao > listaFilmes[1].notaAvaliacao && listaFilmes[0].notaAvaliacao > listaFilmes[2].notaAvaliacao ) {
        maiorNota = listaFilmes[0].notaAvaliacao
        filmeComMaiorNota = listaFilmes[0].titulo
    } else if (listaFilmes[1].notaAvaliacao > listaFilmes[2].notaAvaliacao) {
        maiorNota = listaFilmes[1].notaAvaliacao
        filmeComMaiorNota = listaFilmes[1].titulo
    } else {
        maiorNota = listaFilmes[2].notaAvaliacao
        filmeComMaiorNota = listaFilmes[2].titulo
    }
    
    console.log(`O filme de melhor avaliação com nota ${maiorNota} é: ${filmeComMaiorNota}.`)
  }

  exibirFilmeMaiorNota(listaFilmes)