/*
 * Exercício 8
 *  - criar um objeto que tenha características de um caminhão e coloque em props distintas
 *  - com destructuring coloque essas props em variáveis separadas
*/

const caminhao = {
  eixos: 2,
  rodas: 12,
  portas: 2,
  combustivel: 'diesel',
  carga: 'alimentos'
}

const { carga, combustivel, eixos, portas, rodas } = caminhao

console.log(combustivel) // diesel
console.log(rodas) // 12
console.log(carga) // alimentos
