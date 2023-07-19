/*
 * Generics – Parte 1
 *  - uma forma de criar componentes sem um tipo específico, com a possibilidade de reutilização
 *  - cria-se um "placeholder" de um type, que será preenchido na execução
*/

function identity<T>(arg: T): T {
  console.log(typeof arg);
  return arg;
}

console.log(identity(1));
console.log(identity('asd'));
