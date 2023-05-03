/*
 * Acessando a propriedade por variável
 *  - podemos acessar uma prop por meio de uma variável
 *  - é importante que a variável contenha o texto da prop
*/

let cavalo = {
  patas: 4,
  estaDomesticado: false,
  m: "alguma coisa"
}

const n = "patas"
const m = 'estaDomesticado'

console.log(cavalo[n]) // 4
console.log(cavalo.n) // undefined -> essa prop não existe no objeto

console.log(cavalo[m]) // false
console.log(cavalo.m) // alguma coisa
