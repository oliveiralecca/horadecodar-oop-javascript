/*
 * Modificação do prototype
 *  - ao alterar o prototype, todas as instâncias ganham seus novos métodos e propriedades
*/

function Pessoa(nome, idade) {
    this.nome = nome
    this.idade = idade
}

Pessoa.prototype = {
    profissao: 'Dev',
    falar() {
        console.log('Olá, mundo!')
    }
}

const leticia = new Pessoa('Letícia', 29)

Pessoa.prototype.gritar = function() {
    console.log('AHHHHHHHHHH')
}

leticia.gritar() // AHHHHHHHHHH