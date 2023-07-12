/*
 * Copiando propriedades
 *  - podemos, ao invés de utilizar o fake constructor, copiar as propriedades por um loop e realizar a herança
 *  - precisamos utilizar a propriedade 'uber', que nos dará acesso ao objeto Pai
 *  - a parte ruim dessa abordagem é que ela recria as propriedades e métodos
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
  carenagem: 'aço'
}

function Carro(cor) {
  this.cor = cor
}
Carro.prototype.portas = 4

extend(Carro, Veiculo)

const bmw = new Carro('azul')
console.log(bmw.carenagem) // aço