const productDetails = require('../src/productDetails');

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('deve verificar se productDetails é uma função', () => {
    expect(typeof productDetails).toBe('function');
  });

  it('deve retornar um array', () => {
    const result = productDetails('Alcool gel', 'Máscara');
    expect(Array.isArray(result)).toBe(true);
  });

  it('deve retornar um array contendo dois itens', () => {
    const result = productDetails('Alcool gel', 'Máscara');
    expect(result.length).toBe(2);
  });

  it('deve garantir que cada item no array retornado é um objeto', () => {
    const result = productDetails('Alcool gel', 'Máscara');
    expect(typeof result[0]).toBe('object');
    expect(typeof result[1]).toBe('object');
  });

  it('deve garantir que os dois objetos no array são diferentes', () => {
    const result = productDetails('Alcool gel', 'Máscara');
    expect(result[0]).not.toEqual(result[1]);
  });

  it('deve garantir que os productIds terminam com "123"', () => {
    const result = productDetails('Alcool gel', 'Máscara');
    expect(result[0].details.productId.endsWith('123')).toBe(true);
    expect(result[1].details.productId.endsWith('123')).toBe(true);
  });
});
