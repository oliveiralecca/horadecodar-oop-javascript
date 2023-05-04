/*
 * Criando props e métodos em objetos existentes
 *  - o objeto não é imutável, ele pode ganhar propriedades e métodos ao longo do código
 *  - caso não muito recomendado, usar apenas em extrema necessidade
*/

let carro = {
    tipo: "SUV"
}

carro.portas = 4
console.log(carro) // { tipo: 'SUV', portas: 4 }

carro.acelerar = function() {
    console.log("Vruuuummmmm")
}
console.log(carro) // { tipo: 'SUV', portas: 4, acelerar: [Function] }

carro.acelerar() // Vruuuummmmm