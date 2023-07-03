/*
 * Propriedades do objeto x Propriedades do prototype
 *  - a ordem de acesso é: primeiro o objeto e depois o prototype
 *  - as propriedades podem coexistir
*/

function Pessoa(nome, idade) {
    this.nome = nome
    this.idade = idade
}

Pessoa.prototype = {
    idade: 10,
    cabelo: 'castanho'
}

const leticia = new Pessoa('Letícia', 29)

console.log(leticia.idade) // 29
console.log(leticia.cabelo) // castanho

leticia.cabelo = 'ruivo'

console.log(leticia.cabelo) // ruivo
