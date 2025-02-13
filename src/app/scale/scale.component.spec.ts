import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScaleComponent } from './scale.component';

describe('ScaleComponent', () => {
  let component: ScaleComponent;
  let fixture: ComponentFixture<ScaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScaleComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(ScaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
