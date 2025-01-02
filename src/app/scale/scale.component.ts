import { CdkDrag, CdkDragEnd, DragDropModule, DragRef } from '@angular/cdk/drag-drop';
import { Component, inject, input } from '@angular/core';
import { GRID_WIDTH_PX } from '../app.config';
import { Story } from '../story';
import { StoryCardComponent } from '../story-card/story-card.component';

@Component({
  selector: 'app-scale',
  imports: [
    StoryCardComponent,
    DragDropModule,
  ],
  templateUrl: './scale.component.html',
  styleUrl: './scale.component.scss',
})
export class ScaleComponent {
  scales = [
    1,
    2,
    3,
    5,
    8,
    13,
    21,
  ];
  guidelines = Array(25);
  gridWidth = inject(GRID_WIDTH_PX);

  stories = input.required<Story[], Story[]>({ transform: applyY });

  onDroped(e: CdkDragEnd<Story>) {
    const origin = (e.source.boundaryElement as HTMLElement).getBoundingClientRect();
    const correctedStoryPoint = Math.round((e.dropPoint.x - origin.x) / this.gridWidth);

    e.source.data.sp = (e.source.data.sp ?? e.source.data.orgSp)
      + (e.distance.x / this.gridWidth);
    e.source.data.y = (e.source.data.y ?? 0) + e.distance.y;
    this.stories().sort((a, b) => (a.y ?? 0) - (b.y ?? 0));
    applyY(this.stories());
    e.source.reset();
    setTimeout(() => {
      e.source.data.sp = correctedStoryPoint;
    }, 0);
  }
}

function applyY(stories: Story[]): Story[] {
  return stories.map((s, i) => {
    s.y = (stories[i - 1]?.y ?? -36) + 36;
    // s.sp = Math.round(Math.random() * 13);
    return s;
  });
}
