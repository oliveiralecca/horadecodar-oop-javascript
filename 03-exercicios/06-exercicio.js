/*
 * Exercício 6
 *  - criar uma função que retorna se o objeto é uma instância de outro objeto
 *  - deve-se apresentar no console as mensagens de positivo e negativo
*/

function whichObjectInstance(a, b) {
  // instanceof(objeto, Classe)
  if (a instanceof b) {
    console.log(`O objeto ${a.nome} é uma instância de ${b.name}`)
  } else {
    console.log(`O objeto ${a.nome} não é uma instância de ${b.name}`)
  }
}

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

whichObjectInstance(naruto, Ninja) // O objeto Naruto é uma instância de Ninja
whichObjectInstance(orochimaru, Ninja) // O objeto Orochimaru não é uma instância de Ninja
