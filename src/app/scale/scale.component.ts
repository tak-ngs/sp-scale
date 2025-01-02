import { CdkDragEnd, DragDropModule } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
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

  stories: Story[] = [
    {
      title: 'Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar ',
      storyPoint: 3,
      correctedStoryPoint: 4,
      link: 'https://ja.wikipedia.org/wiki/Foobar',
    },
    {
      title: 'ほげぴよほげぴよほげぴよほげぴよほげぴよ',
      storyPoint: 3,
      // link: 'https://ja.wikipedia.org/wiki/Foobar',
    },
  ];

  onDroped(e: CdkDragEnd<Story>) {
    const origin = (e.source.boundaryElement as HTMLElement).getBoundingClientRect();
    const correctedStoryPoint = Math.round((e.dropPoint.x - origin.x) / 100);

    e.source.data.correctedStoryPoint = (e.source.data.correctedStoryPoint ?? e.source.data.storyPoint)
      + (e.distance.x / 100);
    e.source.data.y = (e.source.data.y ?? 0) + e.distance.y;

    e.source.reset();
    setTimeout(() => {
      e.source.element.nativeElement.style.transition = 'all .1s ease-out';
      e.source.data.correctedStoryPoint = correctedStoryPoint;
    }, 0);
    setTimeout(() => {
      e.source.element.nativeElement.style.transition = '';
    }, 100);
  }
}
