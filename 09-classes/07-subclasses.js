/*
 * Subclasses
 *  - uma forma de criar herança com as classes
 *  - utilizando a palavra reservada 'extends', uma classe herda as propriedades e métodos de outra
 * - a classe filha pode sobrescrever métodos da classe pai, adicionar novos métodos e novas propriedades
 * - o método 'super' é utilizado para acessar o construtor da classe pai
*/

class Animal {
  constructor(nome) {
    this.nome = nome
    this.especie = 'mamífero'
  }
}

class Cachorro extends Animal {
  constructor(nome, idade) {
    super(nome) // essa prop é passada para o constructor da classe pai (Animal)
    this.idade = idade
  }

  latir() {
    console.log('au au')
  }
}

class Gato extends Animal {
  miar() {
    console.log('miau')
  }
}

const dog = new Cachorro('Totó', 3)

console.log(dog) // Cachorro { nome: 'Totó', especie: 'mamífero', idade: 3 }
dog.latir() // au au
console.log(dog.nome) // Totó
console.log(dog.especie) // mamífero

const cat = new Gato('Frajola')

console.log(cat) // Gato { nome: 'Frajola', especie: 'mamífero' }
cat.miar() // miau
