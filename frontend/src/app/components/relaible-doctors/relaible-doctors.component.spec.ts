import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelaibleDoctorsComponent } from './relaible-doctors.component';

describe('RelaibleDoctorsComponent', () => {
  let component: RelaibleDoctorsComponent;
  let fixture: ComponentFixture<RelaibleDoctorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RelaibleDoctorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RelaibleDoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
