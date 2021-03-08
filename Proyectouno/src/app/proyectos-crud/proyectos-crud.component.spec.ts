import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosCrudComponent } from '@app/proyectos-crud/proyectos-crud.component';

describe('ProyectosCrudComponent', () => {
  let component: ProyectosCrudComponent;
  let fixture: ComponentFixture<ProyectosCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectosCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectosCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
