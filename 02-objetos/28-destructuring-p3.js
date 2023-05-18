/*
 * Destructuring — Parte 3
 *  - também funciona com arrays
*/

let frutas = ['banana', 'laranja', 'maçã']

let [banana, orange, m] = frutas
let [b, l] = frutas
let [,,maca] = frutas

console.log(banana, orange, m) // banana laranja maçã
console.log(b, l) // banana laranja
console.log(maca) // maçã
