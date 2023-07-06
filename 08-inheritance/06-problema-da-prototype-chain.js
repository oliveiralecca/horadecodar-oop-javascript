/*
 * Precauções ao utilizar herança com prototype
 *  - utilizando a abordagem de clonar só o prototype tem um side effect (efeito colateral)
 *  - se você muda o prototype, toda a cadeia que o utiliza vai ser alterada também
 *  - então utilize desse jeito apenas quando não precisa mudar métodos e props do prototype
*/

function Pessoa() {}
Pessoa.prototype.classe = 'Mamífero'
Pessoa.prototype.falar = function() {
  console.log('Olá!')
}

function Advogado() {}
Advogado.prototype.profissao = 'Advogado'

Advogado.prototype = Pessoa.prototype 

const fulano = new Advogado()

Advogado.prototype.falar = function() {
  console.log('Tchau!')
}

const ciclano = new Pessoa()
ciclano.falar() // Tchau!
