/*
 * Object literals — Parte 1
 *  - função do ES6 que permite criar objetos mais rapidamente
 *  - utilizando nomes de variáveis para nomes de propriedades, sem redundância caso o nome da prop seja igual ao da variável (não precisa fazer "rodas: rodas")
*/

let rodas = 4
let portas = 4
let aro = 20
let tetoSolar = true

let carro = {
  rodas,
  portas,
  aro,
  tetoSolar
}

console.log(carro) // { rodas: 4, portas: 4, aro: 20, tetoSolar: true }
