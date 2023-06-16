/*
 * Boolean
 *  - também é um objeto e serve para valores booleanos (true e false)
 *  - podemos criar com 'new' e o método .valueOf() retorna o valor do booleano
 *  - este objeto não tem métodos próprios
 *  - é dispensável na criação de um booleano, pois podemos utilizar o tipo primitivo (método literal e convencional)
*/

const a = true
const b = new Boolean(false)

console.log(a) // true

console.log(b) // [Boolean: false]
console.log(b.valueOf()) // false

console.log(a instanceof Boolean) // false

console.log(a.valueOf()) // true -> o método vem do Object
