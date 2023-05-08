/*
 * Funções que retornam objetos
 *  - parecida com as constructor functions, mas para instanciar não precisa usar o 'new'
 *  - o objeto é criado com o retorno da função
 *  - também chamadas de 'Factory Functions'
 *  - reaproveitamento de código
*/

function criarCarro(modelo, portas, cor, tetoSolar) {
    return {
        modelo,
        portas,
        cor,
        tetoSolar,
        ligarCarro() {
            console.log('Ligou!')
        },
        temTetoSolar() {
            if (this.tetoSolar) {
                console.log('Tem teto solar')
            } else {
                console.log('Não tem teto solar')
            }
        }
    }
}

const fiesta = criarCarro('Ford Fiesta', 4, 'Branco', false)
console.log(fiesta) // { modelo: 'Ford Fiesta', portas: 4, cor: 'Branco', tetoSolar: false }
fiesta.ligarCarro() // Ligou!
fiesta.temTetoSolar() // Não tem teto solar

const ferrari = criarCarro('Ferrari', 2, 'Vermelha', true)
console.log(ferrari.modelo) // Ferrari
ferrari.temTetoSolar() // Tem teto solar
