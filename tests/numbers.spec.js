/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const numbers = require('../src/numbers');

/*
  A função `numbers` recebe um array de tamanho variável e retorna `true` se todos os parâmetros forem do tipo 'number' e `false` caso contrário.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, 'a']; [].
  Comportamento:
    - numbers([2, 3, 4]); // Retorna: true
    - numbers([2, 'errado', 5]); // Retorna: false

*/

describe('2 - Implemente os casos de teste para a função `numbers`', () => {
  it('Deve retornar true quando o array contém apenas números', () => {
    expect(numbers([1, 2, 3, 4, 5])).toBe(true);
  });

  it('Deve retornar false quando o array contém um elemento não numérico', () => {
    expect(numbers([1, 2, '3', 4, 5])).toBe(false);
  });

  it('Deve retornar false quando o array contém um ou mais elementos não numéricos', () => {
    expect(numbers([1, 'a', 3])).toBe(false);
  });

  it('Deve retornar false quando o array contém apenas uma string vazia', () => {
    expect(numbers([' '])).toBe(false);
  });

  it('Deve retornar true para um array vazio', () => {
    expect(numbers([])).toBe(true);
  });
});
