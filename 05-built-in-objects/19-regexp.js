/*
 * RegExp
 *  - objeto para tratar expressões regulares (servem para encontrar padrões em textos)
 *  - podemos utilizar métodos como test(), exec() e replace()
*/

const regex = new RegExp(/t/)

console.log(regex.test('teste')) // true
console.log(regex.test('opa')) // false
