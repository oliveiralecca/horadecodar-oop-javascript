/*
 * Construtor temporário
 *  - caso tenha uma solução que não te deixa alterar propriedades e métdos nos objetos filhos, pode ser utilizado um construtor temporário para resolver o problema
*/

function Pessoa() {}
Pessoa.prototype.classe = 'Mamífero'
Pessoa.prototype.falar = function() {
  console.log('Olá!')
}

function Advogado() {}
Advogado.prototype.profissao = 'Advogado'

// clonando o prototype de Pessoa para uma função temporária F, a fim de manter a referência de Pessoa e não alterá-lo, alterações virão direto para a função F
function F() {}
F.prototype = Pessoa.prototype

Advogado.prototype = new F()

Advogado.prototype.falar = function() {
  console.log('Tchau!')
}

const fulano = new Advogado()
fulano.falar() // Tchau!

const ciclano = new Pessoa()
ciclano.falar() // Olá!
