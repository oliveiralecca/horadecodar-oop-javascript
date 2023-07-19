/*
 * Outros tipos de dados do TS
 *  - o Enum nos dá a possibilidade de criar um conjunto apenas de valores numéricos específicos para uma variável
*/

enum Cores {
  VERMELHO, // 0
  AZUL, // 1
  AMARELO, // 2
}

const cor: Cores = Cores.VERMELHO;
console.log(cor); // 0
console.log(Cores[cor]); // VERMELHO
console.log(Cores); // { '0': 'VERMELHO', '1': 'AZUL', '2': 'AMARELO', VERMELHO: 0, AZUL: 1, AMARELO: 2 }

enum Carro {
  Motor = 1,
  Portas = 4,
  Pedais = 2,
}

const numeroDePedais = Carro.Pedais;
console.log(numeroDePedais); // 2
console.log(Carro); // { '1': 'Motor', '2': 'Pedais', '4': 'Portas', Motor: 1, Portas: 4, Pedais: 2 }
