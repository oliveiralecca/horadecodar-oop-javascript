/*
 * Destructuring — Parte 3
 *  - também funciona com arrays
*/

let frutas = ['banana', 'laranja', 'maçã']

let [banana, orange, m] = frutas
let [b, l] = frutas
let [,,maca] = frutas

console.log(banana, orange, m)
console.log(b, l)
console.log(maca)
