/*
 * Copiando propriedades
 *  - os objetos herdam métodos do objeto pai Object e podemos utilizá-los
 *  - para copiar propriedades utilizamos o método "assign"
*/

let pessoa = {
  nome: 'Letícia',
  getNome() {
    console.log(`Objeto de nome: ${this.nome}`)
  }
}

let cliente = {
  nome: 'Luis',
  idade: 15
}

Object.assign(cliente, pessoa)

console.log(cliente) // { nome: 'Letícia', idade: 15, getNome: [Function: getNome] }
cliente.getNome() // Objeto de nome: Letícia
console.log(pessoa === cliente) // false -> apesar da cópia de props, não são iguais
