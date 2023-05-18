/*
 * Exercício 4
 *  - no objeto Ninja, criar uma propriedade "shuriken" com sua quantidade
 *  - a cada chamada ao método de disparo, subtrair uma shuriken
 *  - o ninja não pode atirar mais shurikens caso elas tenham acabado
*/

function Ninja(nome, shurikens) {
  this.nome = nome
  this.shurikens = shurikens
  this.atirarShuriken = function() {
    if (this.shurikens > 0) {
      console.log('Pey pey pey')
      this.shurikens--
    } else {
      console.log('Que pena! Você não tem mais shurikens para atirar.')
    }   
  }
}

const naruto = new Ninja('Naruto', 2)

naruto.atirarShuriken() // Pey pey pey
naruto.atirarShuriken() // Pey pey pey
naruto.atirarShuriken() // Que pena! Você não tem mais shurikens para atirar.
