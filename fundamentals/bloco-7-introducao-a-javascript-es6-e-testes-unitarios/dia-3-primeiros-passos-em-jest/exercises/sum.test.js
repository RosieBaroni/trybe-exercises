const sum = require('./sum.js');

describe('sums two values', () => {
  
  it('entrar 4 e 5 para retornar 9', () => {
    expect(sum(4, 5)).toEqual(9);
  });

  it('entrar 0 e 0 para retornar 0', () => {
    expect(sum(0, 0)).toEqual(0);
  });

  it('deve disparar um erro caso receba como parâmetro uma string', () => {
    expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
  });

});


// 1 - A função sum(a, b) retorna a soma do parâmetro a com o b
// Teste se o retorno de sum(4, 5) é 9
// Teste se o retorno de sum(0, 0) é 0
// Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
// Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")