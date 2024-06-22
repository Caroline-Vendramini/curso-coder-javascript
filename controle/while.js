function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min //random tras um valor entre 0 e 1
    return Math.floor(valor)
}

let opcao = 0

while (opcao != -1) {  // != é diferente do numero -1
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`opcao escolhida foi ${opcao}.`)
}

console.log('Até a próxima!')