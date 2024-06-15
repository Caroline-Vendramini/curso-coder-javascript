const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length) // Acessar quantidade de elementos do array

valores.push({id: 3}, false, null, "teste") // adcicionar novos elementos no array
console.log(valores)

console.log(valores.pop()) // Retira e retorna o ultimo valor do array
delete valores[0] // Deleta o primeiro elemento do array
console.log(valores)

console.log(typeof valores) // Imprime o tipo do array (em js é um objeto)