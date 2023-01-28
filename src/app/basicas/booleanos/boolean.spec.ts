import { regTrue } from "./boolean";

describe('Pruebas de Booleanos', () => {
  it('Debe de retornar Verdadero', () => {
    const res = regTrue();
    expect(res).toBeTrue();
  });
});
