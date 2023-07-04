/*
 * Loop em objetos
 *  - OBS.: um pouco off topic de prototype
 *  - o loop mais indicado para percorrer objetos é o for...in
 *  - o for 'normal' é mais indicado para arrays
*/

function Pessoa(nome, sobrenome, idade) {
    this.nome = nome
    this.sobrenome = sobrenome
    this.idade = idade
}

const pessoa = new Pessoa('Letícia', 'Oliveira', 29)

for (prop in pessoa) {
    console.log(`${prop} => ${pessoa[prop]}`)
}

