const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2)) // Quero saber se o número é inteiro

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) // Quero que diminua o tamanho do número, exemplo 2 casas decimais (7.87)
console.log(media.toString()) // Converter um valor numerico em uma string (valor original)
console.log(media.toString(2)) // Transformar a média numa string em que o valor é binário
console.log(typeof media) // numero é o tipo do dado quando se tem valor numerico, seja inteiro ou ponto flutuante
console.log(typeof Number) // Number com N maiusculo é uma funcao