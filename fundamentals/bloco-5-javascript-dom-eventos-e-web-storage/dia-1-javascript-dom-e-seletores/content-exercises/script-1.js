//Exercício de Fixação - Parte II - Seletores de Elementos

//Para fixar - getElementById
let paragraph = document.getElementById("paragraph");
paragraph.style.color = "red";

/* 1. Recupere o elemento que contém o título da página e faça algo com ele, como 
alterá-lo para o nome do seu filme favorito.*/
let favoriteFilm = document.getElementById("page-title");
favoriteFilm.innerText = "Mad Max";

// 2. Agora recupere o segundo parágrafo e use sua criatividade para alterá-lo.
let descricao = document.getElementById("second-paragraph");
descricao.innerText = "Mad Max é do gênero ficção científica, contendo elementos de ação baseada em um futuro pós-apocalíptico, criada por James McCausland e George Miller.";

// 3. Por fim, recupere o subtítulo e altere-o também.
let myFavoriteFilm = document.getElementById("subtitle");
myFavoriteFilm.innerText = "Meu Filme Favorito";

//Para fixar - getElementsByClassName e getElementsByTagName

/* 1. Adicione uma classe igual para os dois parágrafos.
  Adicionei classes iguais para p1 e p2. */

// 2. Recupere os seus parágrafos via código JavaScript , usando a função getElementsByClassName ;
let myParagraphs = document.getElementsByClassName("paragraphs");

// 3. Altere algum estilo do primeiro deles.
myParagraphs[0].style.color = "blue";

// 4. Recupere o subtítulo e altere a cor dele usando a função getElementsByTagName 
let subtitleText = document.getElementsByTagName("h4")[0];
subtitleText.style.color = "violet";
