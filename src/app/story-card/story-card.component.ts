import { DragDropModule } from '@angular/cdk/drag-drop';
import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Story } from '../story';

@Component({
  selector: 'app-story-card',
  imports: [
    DragDropModule,
    MatCardModule,
  ],
  templateUrl: './story-card.component.html',
  styleUrl: './story-card.component.scss',
})
export class StoryCardComponent {
  data = input.required<StoryCard>();
}

export type StoryCard = Story;
