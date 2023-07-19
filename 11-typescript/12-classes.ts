/*
 * Classes
 *  - utilizam a ideia da versão ES6 do JS e não a herança por prototypes
*/

class Carros {
  marca: string;
  aro: number;

  constructor(marca: string, aro: number) {
    this.marca = marca;
    this.aro = aro;
  }

  verificarAro() {
    return `O aro do carro é: ${this.aro}`;
  }
}

const ferrari = new Carros('Ferrari', 20);
console.log(ferrari); // Carros { marca: 'Ferrari', aro: 20 }
