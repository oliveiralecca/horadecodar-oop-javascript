/*
 * A propriedade prototype
 *  - as funções, além de suas propriedades que já vimos, também vêm com a propriedade 'prototype' criada
 *  - recebemos um objeto vazio, que pode ter propriedades e métodos adicionados
*/

function abc() {
    console.log('teste')
}

console.log(abc.prototype) // {}
console.log(typeof abc.prototype) // object

abc.prototype.prop = 1

console.log(abc.prototype) // { prop: 1 }