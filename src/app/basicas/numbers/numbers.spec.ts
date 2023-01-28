import { incrementar } from './numbers';

describe('Pruebas de Numeros', () => {
  it('Debe de retornar 100, si el numero ingresado es mayor a 100', () => {
    const number = 300;
    const res = incrementar(number);
    expect(res).toBe(100);
  });

  it('Debe de retornar el numero ingresado + 1', () => {
    const number = 99;
    const res = incrementar(number);
    expect(res).toBe(number + 1);
  });
});
