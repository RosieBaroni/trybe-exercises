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

let n = 5;
let asteriscos = "*";
let linhas = "";

for (let linhaIndex = 1; linhaIndex <= n; linhaIndex++) {
  if (linhaIndex % 2 !== 0) {
    for (let colunaIndex = 1; colunaIndex <= linhaIndex; colunaIndex++) {
      linhas += asteriscos;
    }

    linhas = linhas.concat("\n");
  }
}

console.log(linhas);

/* 5- Faça uma pirâmide com n asteriscos de base que seja vazia no meio. 
Assuma que o valor de n será sempre ímpar: */