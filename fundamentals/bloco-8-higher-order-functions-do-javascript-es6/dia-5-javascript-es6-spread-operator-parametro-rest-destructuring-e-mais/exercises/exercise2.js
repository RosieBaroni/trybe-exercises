// 2 - Crie uma função sum que dado um número variável de elementos retorna a soma 
// desses elementos.
// Dica: use parâmetro rest.

function sum(...numbers) {
  return numbers.reduce(((acc, val) => acc + val), 0);
};

console.log(sum(5, 4, 8, 9, 12, 15));
