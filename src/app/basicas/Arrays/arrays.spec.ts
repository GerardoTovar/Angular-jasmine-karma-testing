import { getRobot } from './arrays';

describe('pruebas de arreglos', () => {
  it('Debe de retornar al menos 3 robtos ', () => {
    const res = getRobot();
    expect(res.length).toBeGreaterThanOrEqual(3);
  });

  it('Debe existir MegaMan y ultron ', () => {
    const res = getRobot();
    expect(res).toContain('MegaMan');
    expect(res).toContain('ultron');
  });
});
