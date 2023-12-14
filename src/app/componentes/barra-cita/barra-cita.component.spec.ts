import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraCitaComponent } from './barra-cita.component';

describe('BarraCitaComponent', () => {
  let component: BarraCitaComponent;
  let fixture: ComponentFixture<BarraCitaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BarraCitaComponent]
    });
    fixture = TestBed.createComponent(BarraCitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
