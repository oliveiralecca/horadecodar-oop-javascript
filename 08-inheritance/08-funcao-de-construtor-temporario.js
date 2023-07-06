/*
 * Isolando a herança em uma função
 *  - para facilitar as coisas e deixar a herança reutilizável também, podemos utilizar uma função
*/

// função auxiliar
function extend(Filho, Pai) {
  const F = function() {}
  F.prototype = Pai.prototype
  Filho.prototype = new F()
}

function Pessoa() {}
Pessoa.prototype = {
  classe: 'Mamífero',
  falar() {
    console.log('Olá')
  }
}

function Advogado() {}
Advogado.prototype = {
  profissao: 'Advogado'
}

// herança usando a função auxiliar
extend(Advogado, Pessoa)

const adv = new Advogado
adv.falar() // Olá