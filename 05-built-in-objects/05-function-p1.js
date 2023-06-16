/*
 * Function — Parte 1
 *  - o objeto para criar funções
 *  - podemos criar novas funções a partir do 'new'
 *  - geralmente não é utilizado, e sim a sintaxe literal com 'function'
*/

function teste(a) {
  return a
}
console.log(teste('opa')) // opa

teste2 = new Function('a', 'return arguments')
console.log(teste2('opa')) // [Arguments] { '0': 'opa' }
console.log(teste2('opa')[0]) // opa
