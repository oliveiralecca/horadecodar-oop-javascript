/*
 * Melhorando os objetos do JavaScript
 *  - podemos criar novos métodos e propriedades para os objetos do JavaScript existentes
*/

Array.prototype.checkLength = function() {
    return this.length
}

Array.prototype.somaDoisPrimeiros = function() {
    return this[0] + this[1]
}

const a = [1, 2, 3]
console.log(a.checkLength()) // 3
console.log(a.somaDoisPrimeiros()) // 3
