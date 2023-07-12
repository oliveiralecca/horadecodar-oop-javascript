/*
 * Classe anônima
 *  - outra maneira de criar uma classe
*/

const Tenis = class {
  constructor(modelo, cor) {
    this.modelo = modelo
    this.cor = cor
  }

  modeloDoTenis() {
    return `Modelo: ${this.modelo}`
  }
}

const allStar = new Tenis('All Star', 'preto')

console.log(allStar) // Tenis { modelo: 'All Star', cor: 'preto' }
console.log(allStar.modeloDoTenis()) // Modelo: All Star
