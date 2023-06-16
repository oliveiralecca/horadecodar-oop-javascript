/*
 * Number — Parte 1
 *  - também é um objeto e serve para tratar de números
 *  - tem métodos conhecidos como: parseInt() e parseFloat()
 *  - podemos criar um novo número com 'new'
*/

const a = 2
const b = new Number(5.14)

console.log(a) // 2
console.log(b) // [Number: 5.14]
console.log(b.valueOf()) // 5.14
console.log(Number.parseInt(b)) // 5 -> não precisa passar para a função com o .valueOf()

const c = 3.456

console.log(Number.parseInt(c)) // 3
console.log(parseInt(c)) // 3

const d = '12.858435'

console.log(Number.parseFloat(d)) // 12.858435
console.log(parseFloat(d)) // 12.858435
