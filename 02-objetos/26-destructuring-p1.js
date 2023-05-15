/*
 * Destructuring — Parte 1
 *  - outro recurso que veio com o ES6 
 *  - podemos criar várias variáveis com uma linha só, desestruturando um objeto
 *  - os nomes das variáveis na desestruturação devem ser iguais aos nomes das props
*/

let config = {
  ip: '127.0.0.1',
  port: '80',
  blocked: true
}

let { ip, port, blocked } = config

console.log(ip) // 127.0.0.1
console.log(port) // 80
console.log(blocked) // true
