import { Component } from '@angular/core';
import { Story } from '../story';
import { StoryCardComponent } from '../story-card/story-card.component';

@Component({
  selector: 'app-scale',
  imports: [StoryCardComponent],
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
      title: 'Foo bar',
      storyPoint: 3,
      correctedStoryPoint: 4,
      link: 'https://ja.wikipedia.org/wiki/Foobar',
    },
    {
      title: 'ほげぴよほげぴよほげぴよほげぴよほげぴよ',
      storyPoint: 3,
      correctedStoryPoint: 4,
      link: 'https://ja.wikipedia.org/wiki/Foobar',
    },
  ];
}
