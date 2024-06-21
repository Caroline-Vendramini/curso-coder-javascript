const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) { // floor arredonda o numero para baix 8.9 = 8
        case 10: 
        case 9:
            console.log('Quadro de Honta')
            break
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperacao')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
        default:
            console.log('Nota inválida')
    }
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(3)
imprimirResultado(-1)
imprimirResultado(11)