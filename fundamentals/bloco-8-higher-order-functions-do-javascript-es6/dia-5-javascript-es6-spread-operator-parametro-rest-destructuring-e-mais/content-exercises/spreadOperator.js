// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'morango', 'laranja'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['mel', 'creme de leite', 'granola'];

const fruitSalad = (fruit, additional) => {
  const completeFruitSalad = [...fruit, ...additional];
  return completeFruitSalad;
};

console.log(fruitSalad(specialFruit, additionalItens));