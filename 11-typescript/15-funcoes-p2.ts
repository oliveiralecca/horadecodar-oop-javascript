/*
 * Funções – Parte 2
 *  - funções também aceitam parâmetros opcionais
*/

function bemVindo(nome: string, saudacao?: string ): string {
  if (saudacao) {
    return `Olá, ${saudacao} ${nome}`;
  } else {
    return `Olá, ${nome}`;
  }
}

console.log(bemVindo('João', 'Sr.'));
console.log(bemVindo('Lucas', undefined));
