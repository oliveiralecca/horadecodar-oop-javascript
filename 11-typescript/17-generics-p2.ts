/*
 * Generics – Parte 2
 *  - o tipo pode ser determinado ao invocar a função
*/

function identity2<T>(arg: T): T {
  console.log(typeof arg);
  return arg;
}

console.log(identity2<number>(1));
// console.log(identity2<number>('asd')); // error
