const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

 
/* 1. Crie uma função para adicionar o turno da noite na lesson2 . Essa função 
deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que 
deverá ser adicionada e o valor dela.*/

const addNewKey = (obj, key, value) => {
  obj[key] = value;
};

addNewKey(lesson2, 'turno', 'noite');

/* 2. Crie uma função para listar as keys de um objeto. Essa função deve receber 
um objeto como parâmetro.*/

const listKeys = (objt) =>  Object.keys(objt);
console.log(listKeys(lesson1));

// 3. Crie uma função para mostrar o tamanho de um objeto.

const sizeObjt = (objt) =>  Object.keys(objt).length;
console.log(sizeObjt(lesson1));

/* 4. Crie uma função para listar os valores de um objeto. Essa função deve receber 
um objeto como parâmetro. */

const listObjt = (objt) => Object.values(objt);
console.log(listObjt(lesson1));

/* 5. Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do 
Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: 
lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) */

const allLessons =
{
  lesson1:
   { materia: 'Matemática',
     numeroEstudantes: 20,
     professor: 'Maria Clara',
     turno: 'manhã' },
  lesson2:
   { materia: 'História',
     numeroEstudantes: 20,
     professor: 'Carlos',
     turno: 'noite' },
  lesson3:
   { materia: 'Matemática',
     numeroEstudantes: 10,
     professor: 'Maria Clara',
     turno: 'noite' }
};

console.log(allLessons);

/* 6. Usando o objeto criado no exercício 5, crie uma função que retorne o número 
total de estudantes em todas as aulas. */

const totalNumberStudents = (objt) => {
  let total = 0;
  const array = Object.keys(objt);
  
  for (index in array) {
    total += objt[array[index]].numeroEstudantes;
  }
  return total;
};

console.log(totalNumberStudents(allLessons));

/* 7. Crie uma função que obtenha o valor da chave de acordo com a sua posição 
no objeto. */

const getValueByNumber = (obj, number) => Object.values(obj)[number];
console.log(getValueByNumber(lesson2, 2));

/* 8. Crie uma função que verifique se o par (chave / valor) existe na função. 
Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave 
e o valor da chave. */

const verifyPair = (objt, keyName, keyValue) => {
  const arr = Object.entries(objt);
  let isEqual = false;
  
  for (let index in arr) {
    if (arr[index][0] === keyName && arr[index][1] === keyValue) isEqual = true;
  }
  
  return isEqual;
};

console.log(verifyPair(lesson3, 'turno', 'noite'));