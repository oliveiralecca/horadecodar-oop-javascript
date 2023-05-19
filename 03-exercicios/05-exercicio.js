/*
 * Exercício 5
 *  - criar um objeto Inimigo com as props "nome" e "vivo" (um boolean iniciado como true)
 *  - o método "atirarshuriken" do exercício passado deve matar o inimigo, setando a prop "vivo" para false
*/

function Inimigo(nome) {
  this.nome = nome
  this.vivo = true
}

function Ninja(nome) {
  this.nome = nome
  this.atirarShuriken = function(inimigo) {
    inimigo.vivo = false
  }
}

const naruto = new Ninja('Naruto')
const orochimaru = new Inimigo('Orochimaru')

naruto.atirarShuriken(orochimaru)
console.log(orochimaru.vivo) // false
