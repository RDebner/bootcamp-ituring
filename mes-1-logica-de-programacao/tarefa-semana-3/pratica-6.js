function listaDasSeries (lista, termoDeBusca) {
    let novaLista = []
    for (item of lista)
        if (item.includes(termoDeBusca))
            novaLista.push(item)
    return novaLista
}
let lista = ["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"]                                                                                                                                         
console.log(listaDasSeries(lista , "Th"))

