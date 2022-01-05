const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

// Precisamos criar um terceiro objeto, que terá os dados pessoais e os dados de cargo juntos.
const userAndJobInfos = {
  ...user,
  ...jobInfos
};

console.log(userAndJobInfos);

// Com o objeto em mãos, imprima no console uma frase utilizando os dados do 
//objeto criado anteriormente. Para isso, utilize a desestruturação de objetos em 
//conjunto com template literals.

const { name, age, nationality, profession, squad, squadInitials } = userAndJobInfos;

console.log(`Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. 
I work as a ${profession} and my squad is ${squadInitials}-${squad}`);