import { Jugador } from './jugador';
import { Subscription } from 'rxjs';

describe('Prueba de EventEmitter', () => {
  let jugador = new Jugador();
  let subscribe: Subscription;

  beforeEach(() => {
    jugador.hp = 100;
    if (subscribe) subscribe.unsubscribe();
  });

  it('Debe de Emitir un evento de tipo numero 50', (done) => {
    subscribe = jugador.hpCambia.subscribe({
      next: (hp: number) => {
        expect(hp).toBe(50);
        done();
      },
    });
    jugador.takeDamage(50);
  });

  it('Debe de Emitir un evento de tipo numero 0', (done) => {
    subscribe = jugador.hpCambia.subscribe({
      next: (hp: number) => {
        expect(hp).toBe(0);
        done();
      },
    });
    jugador.takeDamage(300);
  });
});
