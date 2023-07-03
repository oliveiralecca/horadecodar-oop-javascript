/*
 * Adicionando propriedades e métodos com prototype
 *  - podemos adicionar propriedades e métodos através do prototype
 *  - o acesso a elas continua da mesma forma
*/

function Pessoa(nome, idade) {
    this.nome = nome
    this.idade = idade
}

const leticia = new Pessoa('Letícia', 29)

console.log(leticia) // Pessoa { nome: 'Letícia', idade: 29 }

Pessoa.prototype.profissao = 'Dev'
Pessoa.prototype.falar = function() {
    console.log('Olá, mundo!')
}

console.log(leticia) // Pessoa { nome: 'Letícia', idade: 29 } -> esse objeto não 'vê' a prop e método adicionados acima pois foram adicionados ao prototype (ao objeto pai) e não a esse objeto especificamente

leticia.falar() // Olá, mundo!
console.log(leticia.profissao) // Dev