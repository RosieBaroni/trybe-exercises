// Parte II - Criando elementos

//1. Crie um irmão para elementoOndeVoceEsta .
let father = document.getElementById('pai');
let newSection = document.createElement('section');

father.appendChild(newSection);
newSection.innerText = 'Esta área é perigosa!';

//2. Crie um filho para elementoOndeVoceEsta .
let my = document.getElementById('elementoOndeVoceEsta');
let myChild = document.createElement('section');

my.appendChild(myChild);
myChild.innerText = 'Tome muito cuidado...';

//3. Crie um filho para primeiroFilhoDoFilho .
let primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
let FilhoDoPrimeiroFilhoDoFilho = document.createElement('section');

primeiroFilhoDoFilho.appendChild(FilhoDoPrimeiroFilhoDoFilho);
FilhoDoPrimeiroFilhoDoFilho.innerText = 'Não entre';
FilhoDoPrimeiroFilhoDoFilho.className = 'FilhoDoPrimeiroFilhoDoFilho';

//4. A partir desse filho criado, acesse terceiroFilho .
 document.querySelector('.primeiroFilhoDoFilho').parentElement.parentElement.nextElementSibling;