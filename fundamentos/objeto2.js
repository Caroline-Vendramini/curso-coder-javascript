console.log(typeof Object) // typeof objet se trata de uma funcao
console.log(typeof new Object) // typeof new Object se trata de objeto criado a partir de uma funcao

const Cliente = function() {}
console.log(typeof Cliente)
console.log(typeof new Cliente)

class Produto {} // ES 2015 (ES6)
console.log(typeof Produto)
console.log(typeof new Produto())