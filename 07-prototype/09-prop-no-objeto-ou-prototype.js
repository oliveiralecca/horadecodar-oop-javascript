/*
 * Distinguir se é prop do objeto ou do prototype
 *  - utilizando o método 'hasOwnProperty' conseguimos saber se a prop é do objeto ou do prototype
*/

function Pessoa(nome, idade) {
    this.nome = nome
    this.idade = idade
}

Pessoa.prototype.profissao = 'Dev'

const leticia = new Pessoa('Letícia', 29)

console.log(leticia.hasOwnProperty('profissao')) // false
console.log(leticia.constructor.prototype.hasOwnProperty('profissao')) // true

if (leticia.hasOwnProperty('profissao')) {
    console.log('A propriedade profissão é do objeto')
} else if (leticia.constructor.prototype.hasOwnProperty('profissao')) {
    console.log('A propriedade profissão é do prototype')
} else {
    console.log('A propriedade profissão não existe')
}

