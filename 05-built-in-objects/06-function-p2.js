/*
 * Function — Parte 2
 *  - podemos utilizar a propriedade 'length' para saber o número de argumentos de uma função
 *  - também temos o método .toString() neste objeto, para saber o código fonte da função
*/

function teste(a) {
  return a
}

// Métodos que vieram do objeto pai Object
console.log(teste.length) // 1
console.log(teste.toString()) // function teste(a) { return a }

console.log(teste instanceof Function) // true
console.log(Function instanceof Object) // true
