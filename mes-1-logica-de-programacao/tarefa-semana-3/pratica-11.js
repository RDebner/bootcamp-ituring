function ordenaNumeros (listaNumeros) {
    for (let i = 0; i < listaNumeros.length; i++) {
        let indiceMenorAtual = i

        for (let j = i+1; j < listaNumeros.length; j++)
            if (listaNumeros[j] < listaNumeros[indiceMenorAtual]) {
                indiceMenorAtual = j
            }
        const aux = listaNumeros[i]
        listaNumeros[i] = listaNumeros[indiceMenorAtual]
        listaNumeros[indiceMenorAtual] = aux
    }

    return listaNumeros
}

let listaNumeros = [10, 45, 123, 18, 56, 45, 32, 98, 121, 232, 1392824]
console.log(ordenaNumeros(listaNumeros))