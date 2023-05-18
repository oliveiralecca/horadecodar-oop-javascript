/*
 * Exercício 2
 *  - criar um Pessoa que tem uma propriedade nome
 *  - criar um método que exibe o nome do objeto Pessoa
*/

const pessoa = {
  nome: 'Letícia',
  sayYourName() {
    console.log(`Hello! Meu nome é ${this.nome}!`)
  }
}

console.log(pessoa.nome) // Letícia
pessoa.sayYourName() // Hello! Meu nome é Letícia!
