/*
 * Por quê não é recomendado adicionar props e métodos aos objetos built-in?
 *  - futuramente pode vir um método com o mesmo nome na linguagem
 *  - pode gerar confusão para outros desenvolvedores por desconhecerem o método
 *  - para minimizar os problemas, faça uma checagem antes de adicionar
*/

if (typeof Array.prototype.checkLength !== 'function') {
    Array.prototype.checkLength = function() {
        return this.length
    }
}
