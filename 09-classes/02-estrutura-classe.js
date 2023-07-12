/*
 * Definindo classes
 *  - a declaração é bem parecida com constructor functions
 *  - as propriedades devem ficar num método especial chamado 'constructor', onde serão definidas e inicializadas
*/

class Tenis {
  constructor(modelo, cor) {
    this.modelo = modelo
    this.cor = cor
  }
}

console.log(typeof Tenis) // function

const allStar = new Tenis('All Star', 'preto')
console.log(allStar) // Tenis { modelo: 'All Star', cor: 'preto' }
