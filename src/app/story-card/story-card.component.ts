import { DragDropModule } from '@angular/cdk/drag-drop';
import { Component, inject, input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { Story } from '../story';
import { StoryFormDialogComponent } from '../story-form-dialog/story-form-dialog.component';

@Component({
  selector: 'app-story-card',
  imports: [
    DragDropModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
  ],
  templateUrl: './story-card.component.html',
  styleUrl: './story-card.component.scss',
})
export class StoryCardComponent {
  data = input.required<StoryCard>();
  edited = output<Story>();
  removed = output<void>();

  #dialog = inject(MatDialog);

  editStory() {
    this.#dialog.open<any, any, Story | undefined>(StoryFormDialogComponent, {
      width: '90%',
      data: this.data(),
    }).afterClosed().subscribe(result => {
      if (result == null) { return; }
      this.edited.emit(result);
    });
  }
}

export type StoryCard = Story;
