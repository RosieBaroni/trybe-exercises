//Exercício de Fixação - Funções

//1. Soma:
function soma(a, b) {
  add = a + b;
  return add;
};

console.log(soma(10, 10));

//2. Maior de dois números:

function maiorValor(a, b) {
  let result;
  if (a > b) {
  result = a; 
} else if (b > a) {
  result = b;
} else {
  result = "Os números são iguais.";
}
  return result;
};

console.log("O maior número é ", maiorValor(10, 5));

//3. Maior de três números:

function maiorValor(a, b, c) {
  let result;
  if (a > b && a > c) {
  result = a; 
} else if (b > a && b > c) {
  result = b;
} else if (c > a && c > b) {
  result = c;
} else {
  result = "Os números são iguais.";
}
  return result;
};

console.log("O maior número é ", maiorValor(10, 5, 2));