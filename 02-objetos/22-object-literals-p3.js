/*
 * Object literals — Parte 3
 *  - também podemos criar propriedades dinâmicas com variáveis ou retorno de funções
 *  - ajuda a escrever menos código
*/

let tipo = 'tipoDe'

let carro = {
  [`${tipo}Carro`]: 'SUV'
}

let barco = {
  [`${tipo}Barco`]: 'Iate'
}

console.log(carro.tipoDeCarro) // SUV
console.log(barco.tipoDeBarco) // Iate
