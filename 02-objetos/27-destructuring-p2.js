/*
 * Destructuring — Parte 2
 *  - pode-se usar o destructuring para mudar o valor de variáveis já criadas
*/

let config = {
  ip: '127.0.0.1',
  port: '80',
  blocked: true
}

let ip = '192.168.0.1'
let port = '8000'

console.log(ip) // 192.168.0.1
console.log(port); // 8000

({ ip, port } = config)

console.log(ip) // 127.0.0.1
console.log(port) // 80
