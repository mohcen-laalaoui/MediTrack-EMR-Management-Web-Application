import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatinetsComponent } from './patinets.component';

describe('PatinetsComponent', () => {
  let component: PatinetsComponent;
  let fixture: ComponentFixture<PatinetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PatinetsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PatinetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
