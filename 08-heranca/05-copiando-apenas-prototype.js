/*
 * Aumentando ainda mais a eficiência
 *  - vimos que utilizar o prototype é uma boa prática
 *  - então por quê não clonar só o prototype ao invés da instância do objeto?
*/

function Pessoa() {}
Pessoa.prototype.classe = 'Mamífero'
Pessoa.prototype.falar = function() {
  console.log('Olá!')
}

function Advogado() {}
Advogado.prototype.profissao = 'Advogado'

// copiando apenas o prototype de Pessoa para Advogado
Advogado.prototype = Pessoa.prototype 

const fulano = new Advogado()
fulano.falar() // Olá!
