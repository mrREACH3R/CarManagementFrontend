import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorLandingComponent } from './error-landing.component';

describe('ErrorLandingComponent', () => {
  let component: ErrorLandingComponent;
  let fixture: ComponentFixture<ErrorLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ErrorLandingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ErrorLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
