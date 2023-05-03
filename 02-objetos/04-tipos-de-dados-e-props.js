/*
 * Tipos de dados e propriedades
 *  - as propriedades aceitam qualquer tipo de dados no JS
 *  - booleanos, numbers, strings e arrays
*/

let maquina = {
  material: 'Aço inox',
  equipamentos: [
    'motor',
    'freio',
    'esteira',
    'cilindro'
  ],
  vaiMontada: false,
  numeroDeMotores: 1
}

console.log(maquina.material) // Aço inox
console.log(maquina.equipamentos[2]) // esteira

for (const equipamento of maquina.equipamentos) {
  console.log(equipamento);
}

if (!maquina.vaiMontada) {
  console.log("O comprador precisa montar a máquina")
}
