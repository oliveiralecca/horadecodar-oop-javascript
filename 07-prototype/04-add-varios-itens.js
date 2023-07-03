/*
 * Adicionando múltiplas propriedades e métodos com prototype
 *  - não precisamos adicionar um a um
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

leticia.falar() // Olá, mundo!
console.log(leticia.profissao) // Dev