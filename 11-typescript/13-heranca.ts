/*
 * Herança
 *  - a herança do TS também lembra a herança da versão ES6 do JS
*/

class Animal {
  andar() {
    console.log('O animal andou');
  }
}

class Cachorro extends Animal {
  nome: string;

  constructor(nome: string) {
    super();
    this.nome = nome;
  }

  latir() {
    console.log('au au');
  }
}
