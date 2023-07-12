/*
 * Herança múltipla
 *  - uma estrutura difícil de manter, e o JS não nos dá essa funcionalidade de forma fácil, precisamos criar a função
 *  - melhor optar por prototype chain
*/

// função auxiliar
function multi() {
  let n = {}, stuff, j = 0, len = arguments.length

  for (j = 0; j < len; j++) {
    stuff = arguments[j]
    for (let i in stuff) {
      if (stuff.hasOwnProperty(i)) {
        n[i] = stuff[i]
      }
    }
  }

  return n
}

const pneu = {
  material: 'borracha'
}

const aro = {
  tamanho: 20
}

const armacao = {
  arame: '2mm'
}

const roda = multi(pneu, aro, armacao)
console.log(roda) // { material: 'borracha', tamanho: 20, arame: '2mm' }
