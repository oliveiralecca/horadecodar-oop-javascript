/*
 * Funções – Parte 1
 *  - podemos adicionar os tipos dos parâmetros e do retorno da função
*/

function soma(a: number, b: number): number {
  return a + b;
}

console.log(soma(1, 2)); // 3
// console.log(soma(1, '2')); // 12 -> Argument of type 'string' is not assignable to parameter of type 'number'
