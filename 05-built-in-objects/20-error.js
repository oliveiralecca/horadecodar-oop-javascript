/*
 * Error
 *  - objeto para tratar de erros
 *  - os error que recebemos no console derivam dele
 *  - com ele podemos criar nossos próprios erros
*/

try {
  // código
  throw new Error('Ocorreu um erro no código')
} catch (error) {
  console.log(`${error.name}: ${error.message}`) // Error: Ocorreu um erro no código
}
