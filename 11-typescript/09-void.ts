/*
 * Outros tipos de dados do TS
 *  - o Void geralmente é declarado em funções que não retornam nada, e em variáveis não tem nenhuma utilidade (aceitaria apenas undefined como valor)
*/

function semRetorno(): void {
  console.log('message');
}

semRetorno(); // message

let testeVariavel: void;
testeVariavel = undefined;
