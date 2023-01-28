import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { IncrementadorComponent } from './incrementador.component';

describe('IncrementadorComponent', () => {
  let component: IncrementadorComponent;
  let fixture: ComponentFixture<IncrementadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncrementadorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IncrementadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe de mostrar la leyenda', () => {
    component.leyenda = 'Progreso de carga';
    fixture.detectChanges(); // disparar la detección de cambios
    const elem: HTMLElement = fixture.debugElement.query(
      By.css('h3')
    ).nativeElement;
    expect(elem.innerHTML).toContain('Progreso de carga');
  });

  it('Debe de mostrar en el input el valor del progreso', async () => {
    component.cambiarValor(5);
    fixture.detectChanges();

    await fixture.whenStable();
    const input: HTMLInputElement = fixture.debugElement.query(
      By.css('input')
    ).nativeElement;
    expect(input.value).toBe('55');
  });

  it('Debe de incrementar/decrementar en 5, con un click en el botón', () => {
    const botones = fixture.debugElement.queryAll(By.css('.btn-primary'));
    botones[0].triggerEventHandler('click', null);
    expect(component.progreso).toBe(45);
    botones[1].triggerEventHandler('click', null);
    expect(component.progreso).toBe(50);
  });

  it('En el titulo del componente, debe de mostrar el progreso', () => {
    const botones = fixture.debugElement.queryAll(By.css('.btn-primary'));
    botones[0].triggerEventHandler('click', null);
    fixture.detectChanges();
    const elem: HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement;
    expect(elem.innerHTML).toContain('45');
  });
});
