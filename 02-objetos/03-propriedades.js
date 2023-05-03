/*
 * Propriedades
 *  - são características dos objetos
 *  - por exemplo: cor, portas, nome, marca, etc
 *  - podemos iniciar um objeto com várias propriedades
 *  - e acessá-las para resgatar seus valores
*/

let carro = {
  portas: 4,
  cor: "Cinza"
}

console.log(carro.portas) // 4

if (carro.portas > 2) {
  console.log("Este carro tem mais que duas portas")
}

console.log(carro['cor']) // Cinza

let corCarro = carro['cor']
console.log(corCarro.length) // 5
