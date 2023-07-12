/*
 * Métodos estáticos
 *  - métodos que só funcionam caso seja utilizado o nome da classe: Tenis.modeloDoTenis()
 *  - ou seja, não se cria um novo objeto para usar esses métodos
 *  - não é possível utilizar o 'this' dentro de métodos estáticos
 *  - utilizados como funções auxiliares (helpers)
*/

class Calc {
  static somar(a, b) {
    return a + b
  }
}

console.log(Calc.somar(1, 2)) // 3

const c = new Calc()
console.log(c.somar(1, 2)) // TypeError: c.somar is not a function
