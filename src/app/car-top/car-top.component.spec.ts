import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTopComponent } from './car-top.component';

describe('CarTopComponent', () => {
  let component: CarTopComponent;
  let fixture: ComponentFixture<CarTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarTopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
