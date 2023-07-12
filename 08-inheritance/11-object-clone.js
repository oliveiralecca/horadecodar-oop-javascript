/*
 * Resolvendo o problema
 *  - podemos utilizar uma estratégia de copiar um objeto, resolvendo este problema
 *  - porém, o código fica complexo demais, talvez não seja o caso de utilizar herança pra isso
 *  - além de não utilizar prototypes nesta forma
*/

// função auxiliar
function objectClone(o, stuff) {
  let n

  function F() {}
  F.prototype = o

  n = new F()
  n.uber = o

  for (let i in stuff) {
    n[i] = stuff[i]
  }

  return n
}

function Veiculo() {
  this.carenagem = 'aço'
  this.opcionais = ['teto solar', 'display']
}

const v = new Veiculo

const ferrari = objectClone(v, { rodas: 4, marca: 'Ferrari' })
console.log(ferrari) // Veiculo { uber: Veiculo { carenagem: 'aço', opcionais: [ 'teto solar', 'display' ] }, rodas: 4, marca: 'Ferrari' }

ferrari.opcionais.push('blindagem')
console.log(ferrari) // Veiculo { uber: Veiculo { carenagem: 'aço', opcionais: [ 'teto solar', 'display', 'blindagem' ] }, rodas: 4, marca: 'Ferrari' }

console.log(Veiculo) // [Function: Veiculo] { this.carenagem = 'aço', this.opcionais = [ 'teto solar', 'display' ] }
