/*
 * Comparando objetos
 *  - você só consegue ter objetos iguais criando uma referência
 *  - objetos criados a partir de um mesmo construtor sempre serão diferentes
*/

function Ninja(nome, arma) {
    this.nome = nome
    this.arma = arma
}

const naruto = new Ninja('Naruto', 'shuriken')
const rocklee = new Ninja('Rock Lee', 'punhos')
const cloneNaruto = new Ninja('Naruto', 'shuriken')
const refNaruto = naruto

console.log(naruto === rocklee) // false
console.log(cloneNaruto === naruto) // false
console.log(refNaruto === naruto) // true

