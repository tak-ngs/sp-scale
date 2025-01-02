import { Component, HostBinding, HostListener, input } from '@angular/core';
import { Story } from '../story';

@Component({
  selector: 'app-story-card',
  imports: [],
  templateUrl: './story-card.component.html',
  styleUrl: './story-card.component.scss',
})
export class StoryCardComponent {
  data = input.required<StoryCard>();

  @HostBinding('style.opacity')
  opacity = 1;

  @HostListener('dragstart', ['$event'])
  onStartDrag(event: DragEvent) {
    event.dataTransfer!.effectAllowed = 'move';
    this.opacity = 0;
  }
  @HostListener('dragend', ['$event'])
  onEndDrag(event: DragEvent) {
    this.opacity = 1;
    event.dataTransfer!.dropEffect = 'move';
    console.log(event);
  }
}

export type StoryCard = Pick<Story, 'title' | 'color' | 'link'>;
