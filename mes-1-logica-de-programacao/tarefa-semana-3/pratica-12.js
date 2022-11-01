function formarGrupos (listaDePessoas) {
    for (let i = 0; i < listaDePessoas.length - 1 ; i+=2) {
        let Grupo = `Grupo ${i/2 + 1}: ${listaDePessoas[i]}, ${listaDePessoas[i+1]}`
        let sobrou = listaDePessoas.length - 1 === 3
        if (sobrou) Grupo += ` ${listaDePessoas[listaDePessoas.length-1]}`
        console.log(Grupo)
    }

}

let listaDePessoas = ["Anderson Luz", "Fabio Vechia", "Claudia Lopes", "Rafael Alves", "Maria Mansano", "Jairo Ferreira", "Vitor Ribeiro", "Debner"]
formarGrupos(listaDePessoas)