/*
 * Number — Parte 3
 *  - alguns outros métodos importantes de Number são: toFixed, toPrecision e toExponential
 *  - não precisamos utilizar o Number. para acessar estes métodos
*/

const a = 123.456

console.log(a.toFixed(2)) // 123.46
console.log(a.toPrecision(4)) // 123.5 -> conta a partir do primeiro número antes da casa decimal
console.log(a.toExponential()) // 1.23456e+2
