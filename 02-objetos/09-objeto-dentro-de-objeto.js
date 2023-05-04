/*
 * Objetos dentro de objetos
 *  - como o objeto também é um tipo de dado, podemos ter objetos com outros objetos dentro
 *  - utilizando como um array associativo, por exemplo
*/

let pessoa = {
    nome: "Letícia",
    idade: 30,
    caracteristicas: {
        cabelo: ['castanho', 'liso'],
        olhos: 'castanho escuro',
        piercings: true
    }
}

console.log(pessoa.caracteristicas.cabelo[1]) // liso
console.log(pessoa.caracteristicas.piercings) // true
