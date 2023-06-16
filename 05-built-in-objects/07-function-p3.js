/*
 * Function — Parte 3
 *  - métodos do Function que podemos utilizar: .call() e .apply()
 *  - call() -> pode pegar métodos emprestados de outros objetos
 *  - apply() -> idem ao call(), porém todos os parâmetros são transformados em arrays
*/

const a = {
  nome: 'Letícia',
  falar() {
    console.log(`Olá, meu nome é ${this.nome}`)
  }
}

const b = {
  nome: 'João'
}

// falar -> Function -> call()
a.falar() // Olá, meu nome é Letícia
a.falar.call(b) // Olá, meu nome é João
