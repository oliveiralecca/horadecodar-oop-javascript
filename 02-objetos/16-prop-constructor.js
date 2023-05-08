/*
 * A propriedade constructor
 *  - quando um objeto é criado, uma prop 'constructor' sempre é adicionada a ele (herdada do seu __proto__ que é o Object)
 *  - contém a referência de como o objeto foi criado (sua origem)
*/

function criarArvore(especie, temFruto) {
    return {
        especie,
        temFruto
    }
}

const laranjeira = criarArvore('Laranjeira', true)
console.log(laranjeira.constructor) // [Function: Object] 

function Heroi(nome, classe) {
    this.nome = nome
    this.classe = classe
}

const jaspion = new Heroi('Jaspion', 'robô')
console.log(jaspion.constructor) // [Function: Heroi]