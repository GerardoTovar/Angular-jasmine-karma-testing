import { player } from './clase';

describe('Pruebas de clasee', () => {
  const playe = new player();

  /* -------------   Ciclos de vida de las pruebas ---------------------
        beforeAll() => Función que se ejecuta antes de todas las pruebas
        beforeEach() => Función que se ejecuta antes de cada prueba
        afterAll() => Función que se ejecuta después de todas las pruebas
        afterEach() => Función que se ejecuta después de cada prueba
  /*-------------------------------------------------------------------*/

  beforeEach(() => {
    playe.hp = 100;
  });

  it('Debe de retornar 80 de hp, si recibe 20 de damage', () => {
    const reps = playe.takeDamage(20);
    expect(reps).toBe(80);
  });

  it('Debe de retornar 50 de hp, si recibe 50 de damage', () => {
    const reps = playe.takeDamage(50);
    expect(reps).toBe(50);
  });

  it('Debe de retornar 0 de hp, si recibe 100 de damage', () => {
    const reps = playe.takeDamage(100);
    expect(reps).toBe(0);
  });
});
