/*
 * Problema ao copiar por loop
 *  - os arrays ficam alocados na memória e é criado apenas uma referência, fazendo com que se o array do filho se alterar o do pai também se altera
*/

// função auxiliar
function extend(Filho, Pai) {
  const paiProto = Pai.prototype
  const filhoProto = Filho.prototype

  for (let i in paiProto) {
    filhoProto[i] = paiProto[i]
  }

  // garantindo acesso do filho ao objeto pai
  filhoProto.uber = paiProto
}

function Veiculo() {}
Veiculo.prototype = {
  motor: 1,
  carenagem: 'aço',
  opcionais: ['teto solar', 'display']
}

function Carro(cor) {
  this.cor = cor
}
Carro.prototype.portas = 4

extend(Carro, Veiculo)

console.log(Veiculo.prototype) // { motor: 1, carenagem: 'aço', opcionais: [ 'teto solar', 'display' ] }

Carro.prototype.opcionais.push('blindagem')

console.log(Veiculo.prototype.opcionais) // [ 'teto solar', 'display', 'blindagem' ]