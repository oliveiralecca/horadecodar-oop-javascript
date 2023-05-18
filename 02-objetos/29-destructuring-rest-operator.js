/*
 * Destructuring com Rest Operator
 *  - "rest operator" é utilizado quando não sabemos quantos argumentos virão para o destructuring
 *  - podendo criar um array com um tamanho infinito, com os restos dos elementos passados
*/

let array = [1, 2, 3, 4, 5, 6, 7, 8, 'asd', 'asd']

let [a, b, ...c] = array

console.log(a) // 1
console.log(b) // 2
console.log(c) // [3, 4, 5, 6, 7, 8, 'asd', 'asd']
