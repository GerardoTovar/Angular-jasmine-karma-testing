import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';

import { By } from '@angular/platform-browser';
import { RouterLinkWithHref } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    // refine the test module by declaring the test component
    await TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      imports: [RouterTestingModule],
    }).compileComponents();

    // create component and test fixture
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe de tener un link a la página de médicos', () => {
    const elementos = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
    let existe;
    elementos.forEach((elemnt)=> {
      if(elemnt.attributes['routerLink'] === '/medicos') existe = elemnt
    })
    expect(existe).not.toBeNull()
  });
});
