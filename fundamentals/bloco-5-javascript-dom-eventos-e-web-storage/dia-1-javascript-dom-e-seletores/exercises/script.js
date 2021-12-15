// javascript-dom-eventos-e-web-storage_1

// 1. 
function tagP2() {
  let centerContentP2 = document.getElementsByTagName("p")[1];
  centerContentP2.innerText = "Formada na Trybe, trabalhando e colocando tudo que apendi em prática na XPinc.";
};

tagP2();

// 2.  
function classMainContent() {
  let mainBackground = document.getElementsByClassName("main-content")[0];
  mainBackground.style.backgroundColor = "rgb(76,164,109)";
};

classMainContent();

// 3.
function classCenterContent() {
  let centerContentBackground = document.getElementsByClassName("center-content")[0];
  centerContentBackground.style.backgroundColor = "white";
};

classCenterContent();

// 4. 
function tagH1() {
  let title = document.getElementsByTagName("h1")[0];
  title.innerText = "Exercício 5.1 - JavaScript";
};

tagH1();

// 5. 
function tagP1() {
  let centerContentP1 = document.getElementsByTagName("p")[0];
  centerContentP1.innerText = centerContentP1.innerText.toUpperCase();
};

tagP1();

// 6.
function allParagraphs() {
  let allP = document.getElementsByTagName('p');
  for (let i = 0; index < allP.length; i += 1) {
    console.log(allP[i].innerText);
  };
};

allParagraphs();  