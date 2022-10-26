function numeroPrimo (número) {
    for (let i = 2; i < número; i++)
        if (número % i == 0)
            return false

    return true
}
console.log(numeroPrimo(17))
console.log(numeroPrimo(2))
console.log(numeroPrimo(7))
console.log(numeroPrimo(8))
console.log(numeroPrimo(5))
console.log(numeroPrimo(23))
console.log(numeroPrimo(15))
console.log(numeroPrimo(1500450271))
