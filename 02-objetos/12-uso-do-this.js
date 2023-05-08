/*
 * Utilizando o this no objeto
 *  - a palavra reservada 'this' dentro de um objeto se refere à própria instância
 *  - podemos utilizar para resgatar as propriedades e os métodos dentro do próprio objeto
*/

let ninja = {
    classe: 'profissional',
    arma: 'shuriken',
    atirarArma() {
        console.log(`Atirou o(a) ${this.arma}`)
    },
    atirarDuasVezes() {
        for (let i = 2; i > 0; i--) {
            this.atirarArma()
        }
    }
}

ninja.atirarArma()
ninja.atirarDuasVezes()
