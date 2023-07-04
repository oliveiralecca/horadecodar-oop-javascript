/*
 * Verificando propriedades do prototype
 *  - da mesma forma que o objeto tem método de verificar propriedades, os prototypes também têm
*/

function Pessoa(nome) {
    this.nome = nome
}

const leticia = new Pessoa('Letícia')

console.log(leticia.hasOwnProperty('nome')) // true
console.log(leticia.constructor.prototype.hasOwnProperty('nome')) // false

Pessoa.prototype.nome = 'Teste'

console.log(leticia.constructor.prototype.hasOwnProperty('nome')) // true
