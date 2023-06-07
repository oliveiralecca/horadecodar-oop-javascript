/*
 * Object
 *  - pai de todos os objetos
 *  - possui propriedades e métodos, mesmo o objeto estando vazio
 *  - pode ser criado via palavra reservada 'new'
*/

const o1 = {}
const o2 = new Object()

console.log(o1) // {} -> __proto__: Object
console.log(o2) // {} -> __proto__: Object

o1.nome = 'Letícia'
o2.nome = 'Andhressa'

// .valueOf() -> é um método que vem lá do Object (pai dos nossos objetos)
console.log(o1.valueOf()) // { nome: 'Letícia' }
console.log(o2.valueOf()) // { nome: 'Andhressa' }
