// Parte I - Objetos e For/In

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

// 1. Imprima no console uma mensagem de boas-vindas para a personagem acima.

console.log("--- Exercício 1 ---");

console.log("Bem-vinda, " + info.personagem + "!");

console.log("--- Exercício 2 ---");

/* 2. Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e 
o valor 'Sim' e, em seguida, imprima o objeto no console.*/

info.recorrente = "sim";
console.log(info);

console.log("--- Exercício 3 ---");

/* 3. Faça um for/in que mostre todas as chaves do objeto.*/

for (let key in info) {
  console.log(key);
};

console.log("--- Exercício 4 ---");

/* 4. Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto.*/

for (let key in info) {
  console.log(info[key]);
};