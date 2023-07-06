/*
 * Prototype Chain
 *  - é a maneira default da linguagem de fazer herança (ES5 – não é a maneira mais atual)
 *  - podemos instanciar objetos no prototype de outros, criando a herança
*/

function Pessoa() {
  this.classe = 'Mamífero'
  this.falar = function() {
    console.log('Olá!')
  }
}

function Advogado() {
  this.profissao = 'Advogado'
}

Advogado.prototype = new Pessoa() // instanciando um objeto no prototype de outro (advogado herda de pessoa)

const fulano = new Advogado()
fulano.falar() // Olá!
