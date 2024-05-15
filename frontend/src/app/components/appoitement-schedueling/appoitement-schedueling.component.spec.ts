import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppoitementScheduelingComponent } from './appoitement-schedueling.component';

describe('AppoitementScheduelingComponent', () => {
  let component: AppoitementScheduelingComponent;
  let fixture: ComponentFixture<AppoitementScheduelingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppoitementScheduelingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppoitementScheduelingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
