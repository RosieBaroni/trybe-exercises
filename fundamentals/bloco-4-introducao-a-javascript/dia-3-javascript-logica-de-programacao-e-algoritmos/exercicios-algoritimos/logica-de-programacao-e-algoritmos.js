/* 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n 
qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado 
de tamanho n. */

let n = 6;
let linhas = " ";
let asteriscos = "*";

for (let i = 0; i < n; i++) {
  linhas = linhas + asteriscos;
}

for (let i = 0; i < n; i++) {
  console.log(linhas);
}

/*2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um 
triângulo retângulo com 5 asteriscos de base. */

let n = 6;
let linhas = " ";
let asteriscos = "*";

for (let i = 0; i <= n; i++) {
  console.log(linhas);
  linhas = linhas + asteriscos;
}

/* 3- Agora inverta o lado do triângulo. Por exemplo: */

let n = 6;
let asteriscos = "*";
let linhas = "";

for (let linhaIndex = 0; linhaIndex <= n; linhaIndex++) {
  for (let colunaIndex = n; colunaIndex >= 1; colunaIndex--){
    if (colunaIndex > linhaIndex) {
      linhas += " ";
    } else {
      linhas += asteriscos;
    }
 }
 linhas = linhas.concat("\n");
}    

console.log(linhas);

/* 4- Depois, faça uma pirâmide com n asteriscos de base: */

let n = 7;
let asteriscos = "*";
let linhas = "";

let meioDaMatriz = (n + 1) / 2;
let controleEsquerda = meioDaMatriz;
let controleDireita = meioDaMatriz;

for (let linhaIndex = 0; linhaIndex <= meioDaMatriz; linhaIndex += 1) {
  for (let colunaIndex = 0; colunaIndex <= n; colunaIndex += 1) {
    if (colunaIndex > controleEsquerda && colunaIndex < controleDireita) {
      linhas = linhas + asteriscos;
    } else {
      linhas = linhas + " ";
    }
  }
  console.log(linhas);
  linhas = "";
  controleDireita += 1;
  controleEsquerda -= 1
};

/* 5- Faça uma pirâmide com n asteriscos de base que seja vazia no meio. 
Assuma que o valor de n será sempre ímpar: */

let n = 7;
let meio = (n + 1) / 2;
let controleEsquerda = meio;
let controleDireita = meio;
let asteriscos = '*';

for (let linhaIndex = 1; linhaIndex <= meio; linhaIndex += 1) {
  let linhas = '';
  for (let col = 1; col <= n; col += 1) {
    if (col == controleEsquerda || col == controleDireita || linhaIndex == meio) {
      linhas += asteriscos;
    } else {
      linhas += ' ';
    }
  }
  controleEsquerda -= 1;
  controleDireita += 1;
  console.log(linhas);
}