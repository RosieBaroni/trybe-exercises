/*1. Faça um algoritmo que calcule a soma de 1 a 1000 usando a estrutura "for" 
e retorne no formato: A soma de 1 a 1000 é: X.*/

let sum = 0;
for (i = 1; i <= 1000; i += 1) {
  sum += i;
}

console.log("A soma de 1 a 1000 é:", sum);
​
/*2. Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 
são divisíveis por 3. Caso a quantidade seja igual a 50, exiba uma mensagem 
secreta.*/

let quantidade = 0;

for (let i = 2; i <= 150; i++) {
  if (i % 3 === 0) {
    quantidade += 1;
  }   
}

if (quantidade === 50) {
  console.log("mensagem secreta");
}

/*3. Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em 
consideração que são apenas duas pessoas jogando e imprima o resultado no 
formato:"Player 1 won" ou "A Ties" ou "Player 2 won". */
​
let jogador1 = "papel";
let jogador2 = "papel";

if (jogador1 === "pedra" && jogador2 === "papel") {
  console.log("Player 2 won");
} else if (jogador1 === "papel" && jogador2 === "pedra") {
  console.log("Player 1 won"); 
} else if (jogador1 === "tesoura" && jogador2 === "papel") {
  console.log("Player 1 won");
} else if (jogador1 === "papel" && jogador2 === "tesoura") {
  console.log("Player 2 won"); 
} else if (jogador1 === "tesoura" && jogador2 === "pedra") {
  console.log("Player 2 won");
} else if (jogador1 === "pedra" && jogador2 === "tesoura") {
  console.log("Player 1 won"); 
} else { 
  console.log("A Ties");
}

/*4. Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
Imprima no console seguindo o exemplo: "A pessoa é maior de idade".*/
​
let idade = 22;

if (idade > 18) {
  console.log("Maior de idade"); 
} else {
  console.log("Menor de idade"); 
}

/*5. Crie um algoritmo que recebe a idade de Carolzita , Murilo e Baêta e 
imprime quem é a pessoa mais nova no formato: "Pessoa" é a mais nova.*/

let carolzita = 20;
let murilo = 40;
let baeta = 15;

if (carolzita < murilo && carolzita < baeta) {
  console.log("Carolzita é a mais nova"); 
} else if (murilo < carolzita && murilo < baeta) {
  console.log("Murilo é o mais novo");
} else {
  console.log("Baêta é o mais novo"); 
}