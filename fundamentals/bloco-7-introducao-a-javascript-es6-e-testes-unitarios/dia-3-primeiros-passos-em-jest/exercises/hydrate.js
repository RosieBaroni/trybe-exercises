function hydrate(string) {
  let numbersDrinks = string.match(/\d+/g).map(Number);
  let numbersGlassOfWater = 0;

  for (let i = 0; i < numbersDrinks.length; i += 1) {
    numbersGlassOfWater += numbersDrinks[i];
  }
  if (numbersGlassOfWater === 1) {
    return `${numbersGlassOfWater} copo de água`;
  }

  return `${numbersGlassOfWater} copos de água`;
}

module.exports = hydrate;
