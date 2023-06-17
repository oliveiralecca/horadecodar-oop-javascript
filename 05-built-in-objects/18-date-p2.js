/*
 * Date — Parte 2
 *  - existem diversos métodos para aplicar em datas
*/

const data = new Date()

console.log(data) // 2023-06-17T20:32:03.902Z -> data atual

console.log(data.setMonth(2)) // 1679085186346 -> retorna um milissegundo
console.log(new Date(data.setMonth(2))) // 2023-03-17T20:33:45.483Z -> muda para o mês de posição 2 (março)
console.log(new Date(Date.now())) // 2023-06-17T20:35:24.541Z -> data atual
console.log(Date.parse('2023-06-17T20:32:03.902Z')) // 1687033923902 -> retorna um milissegundo correspondente à data passada
