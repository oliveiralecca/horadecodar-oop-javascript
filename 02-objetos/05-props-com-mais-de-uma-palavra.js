/*
 * Propriedades com mais de uma palavra
 *  - as propriedades podem ter mais de uma palavra
 *  - neste caso, precisamos colocá-las entre aspas
 *  - porém, isso não é muito utilizado, optar por camelCase
*/

let cavalo = {
  patas: 4,
  "esta domesticado": false,
  estaDomesticado: false // preferível em camelCase e sem acentos
}

console.log(cavalo["esta domesticado"]) // false -> o acesso é obrigatoriamente com os []
