import { DragDropModule } from '@angular/cdk/drag-drop';
import { Component, input } from '@angular/core';
import { Story } from '../story';

@Component({
  selector: 'app-story-card',
  imports: [
    DragDropModule,
  ],
  templateUrl: './story-card.component.html',
  styleUrl: './story-card.component.scss',
})
export class StoryCardComponent {
  data = input.required<StoryCard>();
}

export type StoryCard = Pick<Story, 'title' | 'color' | 'link'>;
