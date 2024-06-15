const escola = "Cod3r"

console.log(escola.charAt(4)) // Me passa o índice 4, no caso o r
console.log(escola.charAt(5)) // Retorna um valor vazio por nao ter o índice 5
console.log(escola.charCodeAt(3)) // Pegar o valor da tabela asc / unicode no caso, 51.
console.log(escola.indexOf('3')) // procurar se existe o numero 3 no indice. Sim, existe

console.log(escola.substring(1)) // Pegar o indice 1 em diante 
console.log(escola.substring(0, 3)) // Pegar o indice 0 ao 3 sem pegar o 3. 0, 1 e 2. no caso Cod.

console.log('Escola '.concat(escola).concat("!"))
console.log('Escola ' + escola + "!") // Faz concatenação
console.log(escola.replace(3, 'e')) // Trocou o número 3 pela letra "e"

console.log('Ana,Maria,Pedro'.split(',')) // Transformar em array