/*
 * Passando referência de objeto
 *  - quando um objeto existente é atribuído a outra variável, só está sendo passada a referência
 *  - se alterar a referência, o original também é alterado
*/

const objeto = {
    numero: 1
}

console.log(objeto.numero) // 1

const copia = objeto
copia.numero = 5

console.log(objeto.numero) // 5