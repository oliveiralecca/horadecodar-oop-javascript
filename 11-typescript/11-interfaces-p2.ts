/*
 * Interfaces – Parte 2
 *  - podemos criar interfaces com parâmetros opcionais
*/

interface Data {
  nome?: string;
  idade?: number;
}

function criarPessoa(data: Data): { nome: string, idade: number } {
  let pessoa = { nome: 'Não informado', idade: 0 };

  if (data.nome) pessoa.nome = data.nome;
  if (data.idade) pessoa.idade = data.idade;

  return pessoa;
}

const leticia = criarPessoa({ nome: 'Leticia' });
console.log(leticia); // { nome: 'Leticia', idade: 0 }

const murilo = criarPessoa({ nome: 'Murilo', idade: 4 });
console.log(murilo); // { nome: 'Murilo', idade: 4 }
