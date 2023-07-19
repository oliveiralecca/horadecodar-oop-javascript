/*
 * Generics – Parte 2
 *  - o tipo pode ser determinado ao invocar a função
*/

function identity<T>(arg: T): T {
  console.log(typeof arg);
  return arg;
}

console.log(identity<number>(1));
// console.log(identity<number>('asd')); // error
