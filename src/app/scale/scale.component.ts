import { CdkDragEnd, DragDropModule } from '@angular/cdk/drag-drop';
import { Component, input } from '@angular/core';
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

  stories = input.required<Story[], Story[]>({ transform: applyY });

  onDroped(e: CdkDragEnd<Story>) {
    const origin = (e.source.boundaryElement as HTMLElement).getBoundingClientRect();
    const correctedStoryPoint = Math.round((e.dropPoint.x - origin.x) / 100);

    e.source.data.sp = (e.source.data.sp ?? e.source.data.orgSp)
      + (e.distance.x / 100);
    e.source.data.y = (e.source.data.y ?? 0) + e.distance.y;

    e.source.reset();
    setTimeout(() => {
      e.source.element.nativeElement.style.transition = 'all .1s ease-out';
      e.source.data.sp = correctedStoryPoint;
    }, 0);
    setTimeout(() => {
      e.source.element.nativeElement.style.transition = '';
    }, 100);
  }
}

function applyY(stories: Story[]): Story[] {
  return stories.map((s, i) => {
    s.y = (s.y ?? 0) > (stories[i - 1]?.y ?? 0) + 35
      ? s.y
      : (stories[i - 1]?.y ?? -36) + 36;
    // s.sp = Math.round(Math.random() * 13);
    return s;
  });
}
