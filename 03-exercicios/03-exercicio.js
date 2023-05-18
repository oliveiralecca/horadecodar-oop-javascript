/*
 * Exercício 3
 *  - criar um objeto Ninja por constructor function
 *  - com a prop nome e o método "atirarShuriken"
*/

function Ninja(nome) {
  this.nome = nome
  this.atirarShuriken = function() {
    console.log('Pey pey pey')
  }
}

const naruto = new Ninja('Narutão')

console.log(naruto.nome) // Narutão
naruto.atirarShuriken() // Pey pey pey
