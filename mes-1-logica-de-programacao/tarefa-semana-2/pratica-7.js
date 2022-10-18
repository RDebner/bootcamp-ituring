function oláMundo (idioma) {
    espanhol = "Hola Mundo!"
    ingles = "Hello World!"
    portugues = "Olá Mundo!"
    let idiomanãoinformado = "idioma não informado"
    idioma = idiomanãoinformado
    if (idioma == portugues) {
        console.log(portugues)
    } else if (idioma == ingles) {
        console.log(ingles)
    } else if (idioma == espanhol) {
        console.log(espanhol)
    } else {
        console.log("Olá Mundo.")
    }

}
oláMundo()
