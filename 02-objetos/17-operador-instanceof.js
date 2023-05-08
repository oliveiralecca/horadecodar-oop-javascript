/*
 * O operador instanceof
 *  - uma maneira de saber de qual instância (pai) vem algum objeto
 *  - mais prático que utilizar a prop 'constructor'
*/

function criarArvore(especie, temFruto) {
    return {
        especie,
        temFruto
    }
}

const laranjeira = criarArvore('Laranjeira', true)

function Heroi(nome, classe) {
    this.nome = nome
    this.classe = classe
}

const jaspion = new Heroi('Jaspion', 'robô')

console.log(laranjeira instanceof criarArvore) // false -> nesse caso, a função não é o pai do objeto
console.log(laranjeira instanceof Object) // true -> o Object é o pai
console.log(jaspion instanceof Heroi) // true -> nesse caso a função é construtora