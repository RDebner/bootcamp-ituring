let objetos = [{
    titulo: "Estrelas Além do Tempo",
    notaAvaliacao: 7.8,
    duracao: 127,
    anoPublicacao: 2016,
    genero: ["Biografia", "Drama", "História"]
  },
  {
    titulo: "Top Gun",
    notaAvaliacao: 8.6,
    duracao: 130,
    anoPublicacao: 2022,
    genero: ["Ação", "Drama"]
  },
  {
    titulo: "O Jogo da Imitação",
    notaAvaliacao: 8.0,
    duracao: 114,
    anoPublicacao: 2014,
    genero: ["Biografia", "Drama", "Suspense", "Guerra"]
  }]

  function exibirObjetos () {
    for (let i = 0; i<objetos.length;i++)
    console.log(`${objetos[i].titulo} (Nota: ${objetos[i].notaAvaliacao}) \n Duração: ${objetos[i].duracao} minutos \n Ano de Publicação: ${objetos[i].anoPublicacao} \n Gênero: ${objetos[i].genero[0,1,2,3]} \n`)
  }
  exibirObjetos(objetos)