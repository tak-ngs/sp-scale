import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Story } from '../story';

@Component({
  selector: 'app-add-story-dialog',
  imports: [
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './add-story-dialog.component.html',
  styleUrl: './add-story-dialog.component.scss',
})
export class AddStoryDialogComponent {
  story = signal<Story>({
    title: '',
    orgSp: NaN,
  });
  valid = computed(() => {
    return this.story().title.length > 0 && this.story().orgSp;
  });
}
