const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

/*5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra 
a maiúscula ou minúscula.
const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
]; */

function containsA() {
  return names.reduce((accumulator1, current1) =>
    accumulator1 + current1.split('').reduce((acumulator2, current2) => {
      if (current2 === 'a' || current2 === 'A') return acumulator2 + 1;
      return acumulator2;
    }, 0), 0);
};

console.log(containsA(names));
