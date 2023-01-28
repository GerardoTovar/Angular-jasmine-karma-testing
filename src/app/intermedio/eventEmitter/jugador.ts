import { EventEmitter } from '@angular/core';

export class Jugador {
  hp: number;
  hpCambia = new EventEmitter<number>();
  constructor() {
    this.hp = 100;
  }
  takeDamage(damage: number) {
    if (damage >= this.hp) {
      this.hp = 0;
    } else {
      this.hp = this.hp - damage;
    }
    this.hpCambia.emit(this.hp);

  }
}
