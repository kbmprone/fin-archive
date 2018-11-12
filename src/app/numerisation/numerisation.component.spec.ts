import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumerisationComponent } from './numerisation.component';

describe('NumerisationComponent', () => {
  let component: NumerisationComponent;
  let fixture: ComponentFixture<NumerisationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumerisationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumerisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
