import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduelComponent } from './scheduel.component';

describe('ScheduelComponent', () => {
  let component: ScheduelComponent;
  let fixture: ComponentFixture<ScheduelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScheduelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScheduelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
