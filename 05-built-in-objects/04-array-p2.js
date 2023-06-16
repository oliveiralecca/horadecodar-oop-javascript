/*
 * Array — Parte 2
 *  - a propriedade 'length' indica o número de itens de um array
 *  - tem métodos famosos como: push(), pop() e join()
 *  - é de extrema importância conhecer os métodos de arrays para programar bem em JS
*/

const a = [0, 1, 2]
const b = new Array(3, 4, 5)

console.log(a.length) // 3
console.log(b.length) // 3

// Array.prototype.push()
a.push(3)
b.push(6)

console.log(a) // [ 0, 1, 2, 3 ]
console.log(b) // [ 3, 4, 5, 6 ]

// Array.prototype.pop()
a.pop()

console.log(a) // [ 0, 1, 2 ]

// Métodos de Array não vêm do Object.prototype e por isso não funciona com objetos
const c = {}
c.push(3) // TypeError: c.push is not a function -> push != Object e sim push == Array
