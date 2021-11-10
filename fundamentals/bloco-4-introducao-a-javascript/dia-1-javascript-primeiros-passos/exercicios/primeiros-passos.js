// Requisito 1.

let a = 5;
let b = 8;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

// Requisito 2.

let valor1 = 7;
let valor2 = 9;

if (valor1 > valor2) {
  console.log(valor1); 
} else {
  console.log(valor2);
}

// Requisito 3.

let primeiro = 8;
let segundo = 2;
let terceiro = 10;

if (primeiro > segundo && primeiro > terceiro) {
  console.log(primeiro); 
} else if (segundo > primeiro && segundo > terceiro) {
  console.log(segundo);
} else if (terceiro > primeiro && terceiro > segundo) {
  console.log(terceiro);
}

// Requisito 5.

let x = 30;
let y = 0;
let z = 80;

let somaAngulos = x + y + z;

let angulosPositivos = x > 0 && y > 0 && z > 0;

if(angulosPositivos){
  if (somaAngulos === 180) {
    console.log(true);
  } else {
    console.log(false);
  }
} else {
  console.log('Erro: ângulo inválido');
}

// Requisito 6.

const chessPiece = 'bispo';

switch (chessPiece.toLowerCase()) {
  case 'rei':
    console.log('Rei-> Uma casa apenas para qualquer direção.');
    break;
  case 'bispo':
    console.log('Bispo-> Diagonal.');
    break;
  case 'rainha':
    console.log('Rainha-> Diagonal, horizontal e vertical.');
    break;
  case 'cavalo':
    console.log('Cavalo -> "L" pode pular sobre as peças.');
    break;
  case 'torre':
    console.log('Torre -> Horizontal e vertical.');
    break;
  case 'peão':
    console.log('Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.');
    break;
  default:
    console.log('Erro, peça inválida!');
    break;
};

// Requisito 7.
/* 
Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F 
*/

const nota = 85;

if (nota < 0 || nota > 100) {
  console.log("Erro, nota incorreta!");
} else if (nota >= 90) {
  console.log("A");
} else if (nota >= 80) {
  console.log("B");
} else if (nota >= 70) {
  console.log("C");
} else if (nota >= 60) {
  console.log("D");
} else if (nota >= 50) {
  console.log("E");
} else {
  console.log("F");
}

// Requisito 8.

const a = 8;
const b = 2;
const c = 13;

if ((a % 2 === 0 || b % 2 === 0 || c % 2 === 0)) {
  isEven = true;
} else {
  isEven = false
}
console.log(isEven);

// Requisito 9.

const a = 8;
const b = 2;
const c = 10;

if ((a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0)) {
  isEven = true;
} else {
  isEven = false
}
console.log(isEven);

// Requisito 10.

const custoProduto = 4;
const valorVenda = 10;

if (custoProduto >= 0 && valorVenda >= 0) {
  const custoTotal = custoProduto * 1.2;
  const valorTotal = (valorVenda - custoTotal) * 1000;
  console.log(valorTotal);
} else {
  console.log("Error, os valores não podem ser negativos");
}

// Requisito 11.

let aliquotINSS;
let aliquotIR;

const grossSalary = 2000.00;

if (grossSalary <= 1556.94) {
  aliquotINSS = grossSalary * 0.08;
} else if (grossSalary <= 2594.92) {
  aliquotINSS = grossSalary * 0.09;
} else if (grossSalary <= 5189.82) {
  aliquotINSS = grossSalary * 0.11;
} else {
  aliquotINSS = 570.88;
}

const baseSalary = grossSalary - aliquotINSS;

if (baseSalary <= 1903.98) {
  aliquotIR = 0;
} else if (baseSalary <= 2826.65) {
  aliquotIR = (baseSalary * 0.075) - 142.80;
} else if (baseSalary <= 3751.05) {
  aliquotIR = (baseSalary * 0.15) - 354.80;
} else if (baseSalary <= 4664.68) {
  aliquotIR = (baseSalary * 0.225) - 636.13;
} else {
  aliquotIR = (baseSalary * 0.275) - 869.36;
};

console.log("Salário: " + (baseSalary - aliquotIR));