function validateEmailPassword () {
  let buttonLogin = document.querySelector('.btn-login');

  buttonLogin.addEventListener('click', () => {
    const email = document.querySelector('#input-email').value;
    const password = document.querySelector('#input-password').value;

    if (email !== 'tryber@teste.com' || password !== '123456') {
      alert('Email ou senha inválidos.');
    } else if (email === 'tryber@teste.com' && password=== '123456') {
      alert('Olá, Tryber!');
    }
  });
}

validateEmailPassword ();

function limitTextarea () {
const resumo = document.querySelector('#textarea-resumo-curriculo');
  
  resumo.addEventListener('keypress', (event) => {
    
    const imputLength = resumo.value.length;
    const maxChars = 500;

    if (imputLength >= maxChars) {
      event.preventDefault();
    }
  });
}

limitTextarea ();