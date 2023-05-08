/*
 * O Objeto Global
 *  - sempre que iniciada, uma página web traz consigo um objeto chamado 'window'
 *  - as variáveis globais ficam atreladas a ele como propriedades
 *  - funções ficam atreladas a ele como métodos
 *  - os métodos da linguagem também podem ser invocados pela window
 *  - o 'this' no escopo global referencia a window
*/

var teste = 'oioi' // variáveis criadas com let ou const não entram no escopo global

console.log(teste) // oioi
console.log(window.teste) // oioi
console.log(this.teste) // oioi
