/*
 * Interfaces – Parte 1
 *  - é uma forma de definir um tipo de dado
 *  - podemos definir um tipo de dado para um objeto, por exemplo
*/

function imprimirNome(pessoa: { nome: string }) {
  console.log(pessoa.nome);
}

const alguem = { nome: 'Luiz', idade: 30 };
imprimirNome(alguem); // Luiz
