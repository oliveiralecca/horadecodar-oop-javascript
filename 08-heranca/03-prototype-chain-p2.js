/*
 * Prototype Chain (checando a herança) – Parte 2
 *  - quando utilizamos a prototype chain, o objeto passa a virar instância de todos os 'pais' (prototype)
 *  - podemos verificar isso pela instrução instanceof
*/

function Pessoa() {
  this.classe = 'Mamífero'
  this.falar = function() {
    console.log('Olá!')
  }
}

function Advogado() {
  this.profissao = 'Advogado'
}

Advogado.prototype = new Pessoa() // instanciando um objeto no prototype de outro (advogado herda de pessoa)

console.log(fulano instanceof Advogado) // true
console.log(fulano instanceof Pessoa) // true
console.log(fulano instanceof Object) // true
