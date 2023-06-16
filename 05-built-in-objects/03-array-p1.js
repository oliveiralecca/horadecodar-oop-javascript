/*
 * Array — Parte 1
 *  - pai de todos os arrays
 *  - possui também propriedades e métodos
 *  - pode instanciar um array com 'new'
*/

const a = [0, 1, 2]
const b = new Array(3, 4, 5)

console.log(a) // [ 0, 1, 2 ]
console.log(b) // [ 3, 4, 5 ]

// Prototype chain: a -> Array -> Object (daqui vem o acesso ao método .toString())
console.log(a.toString()) // 0,1,2
console.log(b.toString()) // 3,4,5

console.log(a instanceof Array) // true
console.log(b instanceof Array) // true

console.log(a instanceof Object) // true
console.log(b instanceof Object) // true
