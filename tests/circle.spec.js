const circle = require('../src/circle');

describe('4 - Implemente os casos de teste para a função `circle`', () => {
  it('deve retornar undefined para parâmetros que não sejam números', () => {
    expect(circle('a')).toBeUndefined();
    expect(circle([])).toBeUndefined();
    expect(circle({})).toBeUndefined();
    expect(circle(null)).toBeUndefined();
    expect(circle(undefined)).toBeUndefined();
  });

  it('deve retornar um objeto quando um número válido é passado', () => {
    expect(typeof circle(1)).toBe('object');
  });

  it('deve retornar um objeto com 3 propriedades: radius, area e circumference', () => {
    const result = circle(1);
    expect(result).toHaveProperty('radius');
    expect(result).toHaveProperty('area');
    expect(result).toHaveProperty('circumference');
  });

  it('deve retornar undefined quando nenhum parâmetro é passado', () => {
    expect(circle()).toBeUndefined();
  });

  it('deve calcular a circunferência corretamente para um círculo de raio 2', () => {
    const result = circle(2);
    expect(result.circumference).toBeCloseTo(12.56, 2); // 2 * 3.14 * 2 = 12.56
  });

  it('deve calcular a área corretamente para um círculo de raio 3', () => {
    const result = circle(3);
    expect(result.area).toBeCloseTo(28.259999999999998, 2); 
  });

  it('deve retornar todos os dados corretos para um círculo de raio 3', () => {
    const result = circle(3);
    expect(result).toEqual({
      radius: 3,
      area: 28.259999999999998, // 3.14 * 3^2
      circumference: 18.84 // 2 * 3.14 * 3
    });
  });
});
