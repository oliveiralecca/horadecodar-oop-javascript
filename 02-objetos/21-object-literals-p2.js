/*
 * Object literals — Parte 2
 *  - no ES6 também não é preciso declarar métodos com "function"
*/

let rodas = 4
let portas = 4
let aro = 20
let tetoSolar = true

let carro = {
  rodas,
  portas,
  aro,
  tetoSolar,
  bancoDeCouro: true,
  ligar: function() {
    console.log('O carro ligou')
  },
  desligar() {
    console.log('O carro desligou')
  }
}

console.log(carro) // { rodas: 4, portas: 4, aro: 20, tetoSolar: true, bancoDeCouro: true, ligar: [Function: ligar, desligar: [Function: desligar] }
carro.ligar() // O carro ligou
carro.desligar() // O carro desligou
