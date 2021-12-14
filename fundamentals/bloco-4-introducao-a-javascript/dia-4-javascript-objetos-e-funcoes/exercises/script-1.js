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

info.recorrente = "Sim";
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

console.log("--- Exercício 5 ---");

/* 5. Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) 
do primeiro e outros valores e imprima juntos. */

let info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
};

for (let key in info) {
  if (info[key] === info2[key]) {
    console.log('Ambos recorrentes');
  } else {
    console.log(info[key] + ' e ' + info2[key]);
  }
}

console.log("--- Exercício 6 ---");

/* 6. Acesse as chaves nome , sobrenome e titulo , que está dentro da chave 
livrosFavoritos.*/

let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama "'
 + leitor.livrosFavoritos[0].titulo +  '".');

console.log("--- Exercício 7 ---");

/* 7. Adicione um novo livro favorito na chave livrosFavoritos , que é um array */

leitor.livrosFavoritos.push({
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editor: 'Rocco',
});

console.log(leitor);

console.log("--- Exercício 8 ---");

/* 8. Acesse as chaves nome e livrosFavoritos e faça um console.log */

console.log(leitor.nome + " tem " + leitor.livrosFavoritos.length + " livros favoritos ");