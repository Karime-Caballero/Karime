import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendarConsultorioComponent } from './agendar-consultorio.component';

describe('AgendarConsultorioComponent', () => {
  let component: AgendarConsultorioComponent;
  let fixture: ComponentFixture<AgendarConsultorioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgendarConsultorioComponent]
    });
    fixture = TestBed.createComponent(AgendarConsultorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
