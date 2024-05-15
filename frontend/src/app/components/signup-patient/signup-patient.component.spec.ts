import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http'; 

import { SignupPatientComponent } from './signup-patient.component';

describe('SignupPatientComponent', () => {
  let component: SignupPatientComponent;
  let fixture: ComponentFixture<SignupPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignupPatientComponent, HttpClientModule],
    }).compileComponents();
    
    fixture = TestBed.createComponent(SignupPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
