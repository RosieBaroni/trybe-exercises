// Parte II - Funções

//exercício 1.

function verificaPalindrome(casa) {
  for (i in casa) {
    if (casa[i] !== casa[casa.length -1]) {}
  }
}   

//exercício 2.

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

//exercício 3.

function maiorPosicao(numeros) {
  let indiceMaior = 0;

  for (let i in numeros) {
    if (numeros[indiceMaior] > numeros[i]) {
      indiceMaior = i;
    }
  }

  console.log(indiceMaior);
}

maiorPosicao([4, 2, 20, 3]);

//exercício 4.

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