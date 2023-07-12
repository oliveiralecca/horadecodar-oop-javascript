/*
 * Métodos e props no Prototype
 *  - a ideia de utilizar o prototype é para que cada prop ou método adicionado nele não se repita a cada objeto instanciado
 *  - então essa herança beneficia o código criando uma referência para os novos objetos e deixando o programa mais performático
 *  - não ocupando um novo espaço na memória para cada objeto instanciado
*/

function Pessoa() {}
Pessoa.prototype.classe = 'Mamífero'
Pessoa.prototype.falar = function() {
  console.log('Olá!')
}

function Advogado() {}
Advogado.prototype.profissao = 'Advogado'
Advogado.prototype = new Pessoa() 

const fulano = new Advogado()
fulano.falar() // Olá!
