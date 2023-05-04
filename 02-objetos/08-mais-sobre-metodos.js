/*
 * Criando mais métodos
 *  - os métodos podem realizar qualquer operação que uma função realiza
*/

let pessoa = {
    nome: "Letícia",
    idade: 30,
    // abaixo, sintaxe anterior ao ES6
    falar: function() {
        console.log(`Oi, meu nome é ${this.nome}`)
    },
    // abaixo, sintaxe introduzida com o ES6
    aniversario() {
        this.idade += 1
    },
    dizerIdade() {
        console.log(`A minha idade é ${this.idade}`)
    },
    podeDirigir() {
        if (this.idade >= 18) {
            console.log("Pode dirigir")
        } else {
            console.log("Não pode dirigir")
        }
    }
}
  
pessoa.aniversario()
console.log(pessoa.idade) // 31
pessoa.aniversario()
pessoa.dizerIdade() // A minha idade é 32
pessoa.podeDirigir() // Pode dirigir

let calculadora = {
    cache: 0,
    somar(a, b) {
        this.cache = a + b
    },
    subtracao(a) {
        this.cache -= a
    }
}

calculadora.somar(2, 4)
console.log(calculadora.cache) // 6
calculadora.subtracao(1)
console.log(calculadora.cache) // 5