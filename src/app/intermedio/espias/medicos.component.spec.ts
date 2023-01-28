import {ComponentFixture,fakeAsync,tick,TestBed} from '@angular/core/testing';
import {HttpClientTestingModule,HttpTestingController} from '@angular/common/http/testing';
import { EMPTY, from, throwError } from 'rxjs';
import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';

describe('MedicosComponent', () => {
  let component: MedicosComponent;
  let fixture: ComponentFixture<MedicosComponent>;
  let servicio: MedicosService;

  beforeEach(() => {
    // refine the test module by declaring the test component
    TestBed.configureTestingModule({
      imports: [MedicosComponent, HttpClientTestingModule],
      providers: [MedicosService],
    });

    // create component and test fixture
    fixture = TestBed.createComponent(MedicosComponent);
    component = fixture.componentInstance;

    // This is new way to inject Spied Service
    servicio = TestBed.inject(MedicosService);
  });

  it('ngOnInit: Llama este metodo para cargar datos de un servicio', async () => {
    const medicos = ['medico1', 'medico2', 'medico3'];

    spyOn(servicio, 'getMedicos').and.callFake(() => from([medicos]));

    // ngOnInit se puede llamar directamente por la clase
    //  component.ngOnInit();
    // o se puede llamar fixture.detectChanges(); para inicializar
    fixture.detectChanges();

    // Espera a que carge el componente y su ciclo de vida ejem ngOnInit
    await fixture.whenStable();
    expect(component.medicos.length).toBeGreaterThan(0);
  });

  it('Llama un Observable simulando trafico de red', (done) => {
    const medicos = ['medico1', 'medico2', 'medico3'];

    servicio.getData().subscribe({
      next: (data) => {
        expect(data).toEqual(medicos);
        done();
      },
      complete: () => {},
    });
  }, 10000);

  it('Debe llamar al servidor para agregar un médico', () => {
    const espia = spyOn(servicio, 'agregarMedico').and.callFake(() => EMPTY);
    component.agregarMedico();
    expect(espia).toHaveBeenCalled();
  });

  it('Debe agregar un nuevo medico al arreglo de medicos', () => {
    const medic = { id: 1, name: 'John' };
    spyOn(servicio, 'agregarMedico').and.returnValue(from([medic]));
    component.agregarMedico();
    expect(component.medicos.indexOf(medic)).toBeGreaterThanOrEqual(0);
  });

  it('Si falla la adicion, la propiedad mensajeError debe ser igual al error del servicio', () => {
    const myError = 'No se pudo agregar el medico';
    spyOn(servicio, 'agregarMedico').and.returnValue(throwError(() => myError));
    component.agregarMedico();
    expect(component.mensajeError).toBe(myError);
  });

  it('Debe llamar al servidor para borrar medico', () => {
    spyOn(window, 'confirm').and.returnValue(true);
    const spy = spyOn(servicio, 'borrarMedico').and.returnValue(EMPTY);
    component.borrarMedico('1');
    expect(spy).toHaveBeenCalledWith('1');
  });

  it('No debe llamar al servidor para borrar medico', () => {
    spyOn(window, 'confirm').and.returnValue(false);
    const spy = spyOn(servicio, 'borrarMedico').and.returnValue(EMPTY);
    component.borrarMedico('1');
    expect(spy).not.toHaveBeenCalledWith('1');
  });
});
