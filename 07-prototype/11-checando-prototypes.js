/*
 * Checar se é prototype de algum objeto
 *  - com o método isPrototypeOf conseguimos checar se um objeto é prototype de outro
*/

const caracteristicas = {
    maos: 2,
    pernas: 2,
    pes: 2
}

function Humano(name) {
    this.name = name
}

Humano.prototype = caracteristicas

const leticia = new Humano('Letícia')
console.log(leticia.maos) // 2
console.log(caracteristicas.isPrototypeOf(leticia)) // true
