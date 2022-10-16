function nomeDoComprador (nome) {
    nome = "Rafael"
    console.log(`Olá,${nome}.`)
}
function informações (nomeDoProduto,quemRecebeu,endereço) {
    nomeDoProduto = 'Playstation 5'
    quemRecebeu = 'Marcio Debner'
    endereço = 'Rua 59-a'
    console.log(`Fizemos a entrega do produto ${nomeDoProduto} no endereço ${endereço} com sucesso!
    O seu produto foi recebido por: ${quemRecebeu}
    Esperamos que você esteja contente com o produto. Caso contrário, fale conosco em até 7 dias para que possamos ajudar.`)
    }
function email (nomeDeQuemEnviouOEmail) {
    nomeDeQuemEnviouOEmail = "Jobson"
    console.log(`Atenciosamente,
    ${nomeDeQuemEnviouOEmail}`)
}    
nomeDoComprador()
informações()
email()