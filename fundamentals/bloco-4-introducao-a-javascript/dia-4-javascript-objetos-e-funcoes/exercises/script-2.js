// Parte II - Funções

// 1. Crie uma função que receba uma string e retorne true se for um palíndromo, 
//ou false , se não for.

function verificaPalindrome(casa) {
  for (i in casa) {
    if (casa[i] !== casa[casa.length -1]) {}
  }
}   

// 2. Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function maiorPosicao(numeros) {
  let indiceMaior = 0;

  for (let i in numeros) {
    if (numeros[indiceMaior] < numeros[i]) {
      indiceMaior = i;
    }
  }

  console.log(indiceMaior);
}

maiorPosicao([4, 2, 20, 3]);

// 3.  Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function menorPosicao(numeros) {
  let indiceMenor = 0;

  for (let i in numeros) {
    if (numeros[indiceMenor] > numeros[i]) {
      indiceMenor = i;
    }
  }

  console.log(indiceMenor);
}

menorPosicao([4, 2, 20, 3]);

// 4. Crie uma função que receba um array de nomes e retorne o nome com a maior 
//quantidade de caracteres.

function maiorNome(nomes) {
  let maiorNome = "";

  for (let nome of nomes) {
    if (maiorNome.length < nome.length) {
      maiorNome = nome;
    }
  }

  console.log(maiorNome);
}

maiorNome(['José', 'Fernanda', 'Joana']);

// 5. Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

function numMaisRepete(numeros) {
  let contRepetido = 0;
  let contNumero = 0;
  let indexNumeroRepetido = 0;

  for (let index in numeros) {
    let verificaNumero = numeros[index];
    for (let index2 in numeros) {
      if (verificaNumero === numeros[index2]) {
        contNumero += 1;
      }
    }
    if (contNumero > contRepetido) {
      contRepetido = contNumero;
      indexNumeroRepetido = index;
    }
    contNumero = 0;
  }
  return numeros[indexNumeroRepetido];
}

console.log(numMaisRepete([2, 3, 2, 5, 8, 2, 3]));

// 6. Crie uma função que receba um número inteiro N e retorne o somatório de todos 
// os números de 1 até N.

function somatorioAteN(n) {
  let somaAteN = 0;

  for (i = 1; i <= n; i += 1) {
    somaAteN += i;
  }

  return somaAteN;
}

console.log(somatorioAteN(5));

// 7. Crie uma função que receba uma string word e outra string ending. Verifique 
// se a string ending é o final da string word . Considere que a string ending 
// sempre será menor que a string word .

function verificaFimPalavra(palavra, fimPalavra) {
  palavra = palavra.split('');
  fimPalavra = fimPalavra.split('');
  controle = true;

  for (let index = 0; index < fimPalavra.length; index += 1) {
    if (palavra[palavra.length - fimPalavra.length + index] != fimPalavra[index]) {
      controle = false;
    }
  }

  return controle;
}

console.log(verificaFimPalavra('trybe', 'be'));