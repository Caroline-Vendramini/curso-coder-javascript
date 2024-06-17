console.log('01)', '1' == 1) // == compara o valor e nao o tipo
console.log('02)', '1' === 1) // === compara se é estritamente igual, valor e tipo
console.log('3)', '3' !== 3) // != é diferente um do outro? nao, o valor é o mesmo
console.log('4)', '3' !==3) // !== é estritamente diferente um do outro? sim, o tipo é diferente

console.log('5)', 3 < 2) // 3 é menor que 3? false
console.log('6)', 3 > 2) // 3 é maior que 2? true
console.log('7)', 3 <= 2) // menor igual a 2? false
console.log('8)', 3 >=2 ) // maior menor igual a 2? true

// new Date(0) = 0 é o primeiro dia de janeiro de 1970 (data referencia do JS)
const d1 = new Date(0)
const d2 = new Date(0)
console.log('9)', d1 === d2) // os 2 falsos estao comparando ponto de referencia de data
console.log('10)', d1 == d2) // 
console.log('11)', d1.getTime() === d2.getTime()) // true estritamente iguais comparando number

console.log('12)', undefined == null)
console.log('13)', undefined === null)