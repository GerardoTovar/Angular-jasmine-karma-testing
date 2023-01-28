import { mensaje } from './string';

describe('Pruebas de strings', () => {
  it('Debe de regresar un string', () => {
    const stringResp = mensaje('Gerardo');
    expect(typeof stringResp).toBe('string');
  });

  it('Debe de regresar un string', () => {
    const nombre = 'Gerardo';
    const stringResp = mensaje(nombre);
    expect(stringResp).toContain(nombre);
  });
});
