import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Story } from '../story';

@Component({
  selector: 'app-story-form-dialog',
  imports: [
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './story-form-dialog.component.html',
  styleUrl: './story-form-dialog.component.scss',
})
export class StoryFormDialogComponent {
  data = inject<Story>(MAT_DIALOG_DATA, { optional: true });
  story = signal<Story>({
    title: '',
    orgSp: NaN,
    ...this.data,
  });
  valid = computed(() => {
    return this.story().title.length > 0 && this.story().orgSp;
  });
}
