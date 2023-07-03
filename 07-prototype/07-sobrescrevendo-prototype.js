/*
 * Maneira de utilizar o prototype que já tem a prop
 *  - podemos deletar uma propriedade e voltar a utilizar o prototype
 *  - pois mesmo sendo sobrescrito, ainda estará disponível
*/

function Pessoa(nome) {
    this.nome = nome
}

Pessoa.prototype = {
    nome: 'estava sobrescrito pelo nome definido na classe',
}

const leticia = new Pessoa('Letícia')

console.log(leticia.nome) // Letícia

delete leticia.nome

console.log(leticia.nome) // estava sobrescrito pelo nome definido na classe
