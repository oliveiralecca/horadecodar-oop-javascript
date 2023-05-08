/*
 * Constructor functions
 *  - uma outra forma de criar objetos
 *  - grande vantagem: este método de criação aceita parâmetros para o objeto
 *  - reaproveitamento de código ao criar instâncias a partir de uma mesma função
*/

function Ninja(nome, arma) {
    this.nome = nome
    this.arma = arma
    this.atirarArma = function() {
        console.log(`Atirou o(a) ${this.arma}`)
    }
}

let ninjaA = new Ninja('Naruto', 'shuriken')

console.log(ninjaA) // Ninja { nome: 'Naruto', arma: 'shuriken', atirarArma: [Function] }
console.log(ninjaA.nome) // Naruto
ninjaA.atirarArma() // Atirou o(a) shuriken

let ninjaB = new Ninja('Sasuke', 'kunai')

console.log(ninjaB.nome) // Sasuke
ninjaB.atirarArma() // Atirou o(a) kunai
