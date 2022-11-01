let informacoesFilme = {
    titulo: "Spider-Man",
    nota: 7.4, 
    duracao: 122,
    anoDePublicacao:2002,
    categoria:["Ação","Aventura","Ficção científica"]
}
   
function exibeInformacoesFilme (){
    console.log(`O filme ${informacoesFilme.titulo} que estreou em ${informacoesFilme.anoDePublicacao} tem a avaliação de ${informacoesFilme.nota} pelo IMDb`)
}
exibeInformacoesFilme(informacoesFilme)