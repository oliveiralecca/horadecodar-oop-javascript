/*
 * Comparando objetos via método
 *  - podemos comparar os objetos com o método "is" do Object
 *  - teremos basicamente os mesmos resultados de "==="
 *  - exceto para a comparação de "NaN com NaN" e de "+0 com -0", que neste método são considerados iguais
*/

let coluna = {
  paragrafos: 5
}

let materia = {
  paragrafos: 5
}

console.log(Object.is(coluna, materia)) // false

console.log(Object.is(NaN, NaN)) // true
console.log(NaN === NaN) // false

console.log(Object.is(+0, -0)) // false
console.log(+0 === -0) // true

let texto = coluna

console.log(Object.is(coluna, texto)) // true -> um é referência do outro
