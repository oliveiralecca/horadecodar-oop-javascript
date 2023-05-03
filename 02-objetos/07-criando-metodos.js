/*
 * Como criar métodos
 *  - são as ações dos objetos
 *  - podemos ter métodos para resgatar propriedades do objeto ou modificar o valor delas
*/

let pessoa = {
  nome: "Letícia",
  falar: function() {
    console.log(`Oi, meu nome é ${this.nome}`)
  }
}

pessoa.falar()
