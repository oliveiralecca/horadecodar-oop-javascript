/*
 * Prototype methods
 *  - são métodos que já existem na Class, por exemplo, os métodos 'getters' e 'setters'
*/

class Tenis {
  constructor(modelo, cor) {
    this.modelo = modelo
    this.cor = cor
  }

  modeloDoTenis() {
    return `Modelo: ${this.modelo}`
  }

  set trocarModelo(novoModelo) {
    this.modelo = novoModelo
  }

  get obterCor() {
    return `Cor: ${this.cor}`
  }
}

const allStar = new Tenis('All Star', 'preto')

allStar.trocarModelo = 'Vans'
console.log(allStar.obterCor) // Cor: preto
