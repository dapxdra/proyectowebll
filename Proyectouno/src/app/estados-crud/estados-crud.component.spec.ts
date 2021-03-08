import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadosCrudComponent } from './estados-crud.component';

describe('EstadosCrudComponent', () => {
  let component: EstadosCrudComponent;
  let fixture: ComponentFixture<EstadosCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadosCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadosCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
