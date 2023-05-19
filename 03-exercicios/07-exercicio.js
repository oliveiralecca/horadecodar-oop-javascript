/*
 * Exercício 7
 *  - criar dois objetos que compartilhem nomes de props via object literals
 *  - uma variável deve definir a parte que se repete nas props dos objetos
*/

const n = 'numeroDe';

const arvore = {
  [`${n}Frutos`]: 10,
}

const carro = {
  [`${n}Portas`]: 2,
}

console.log(arvore.numeroDeFrutos) // 10
console.log(carro.numeroDePortas) // 2
