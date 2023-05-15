/*
 * Atributos das propriedades
 *  - toda propriedade tem atributos já criados pela linguagem, "enumerable" e "configurable"
 *  - "configurable", por exemplo, se estiver "false", não deixa a prop ser editada ou deletada
*/

let pessoa = {
  nome: 'Letícia'
}

console.log(Object.getOwnPropertyDescriptor(pessoa, 'nome')) // { value: 'Letícia', writable: true, enumerable: true, configurable: true }
