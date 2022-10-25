function tabuada (numero,i){
    i = 1
    while (i<=10) {
        let resultado = numero*i
        console.log(`${numero} x ${i} = ${resultado}`)
        i++
    }
}

tabuada(50)