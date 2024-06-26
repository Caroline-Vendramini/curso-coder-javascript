// Armazenando uma funcao em uma variavel
const imprimirSoma = function (a, b) {
    console.log(a +b)
}

imprimirSoma(2, 3)

// Armazenando uma funcao arrow em uma variavel
const soma = (a, b) => {      // essa "setinha =>" substitui o nome "function" e reduz a forma de escrever igual esta acima
    return a + b
}    
   
console.log(soma(2, 3))

// retorno implícito
const subtracao = (a, b) => a - b
console.log(subtracao(2, 3))

const imprimir2 = a => console.log(a)
imprimir2('Legal!!!')