import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryFormDialogComponent } from './story-form-dialog.component';

describe('StoryFormDialogComponent', () => {
  let component: StoryFormDialogComponent;
  let fixture: ComponentFixture<StoryFormDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoryFormDialogComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(StoryFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
