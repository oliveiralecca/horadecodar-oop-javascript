/*
 * Deletando propriedades e métodos
 *  - assim como é possível adicionar, também podemos deletar propriedades e métodos dos objetos
 *  - não é comum utilizar esse 'delete'
*/

let carro = {
    tipo: "SUV",
    cor: "Vermelho",
    ligar() {
        console.log("Ligou")
    }
}
 
console.log(carro.tipo) // SUV

delete carro.tipo
delete carro.ligar

carro.ligar() // TypeError: carro.ligar is not a function
console.log(carro) // { cor: 'Vermelho' }
