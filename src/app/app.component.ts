import { Component, effect, HostBinding, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs';
import { GRID_WIDTH_PX } from './app.config';
import { ScaleComponent } from './scale/scale.component';
import { StoryFormDialogComponent } from './story-form-dialog/story-form-dialog.component';
import { PrimitiveStory, stories } from './story.service';

@Component({
  selector: 'app-root',
  imports: [
    ScaleComponent,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'sp-scale';
  dialog = inject(MatDialog);
  stories = stories();

  @HostBinding('style')
  gridWidth = `--grid-width: ${inject(GRID_WIDTH_PX)}px`;

  dummyStories: PrimitiveStory[] = [
    {
      title: 'Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar ',
      orgSp: 3,
      sp: 4,
      link: 'https://ja.wikipedia.org/wiki/Foobar',
    },
    {
      title: 'Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar ',
      orgSp: 3,
      sp: 4,
      link: 'https://ja.wikipedia.org/wiki/Foobar',
    },
    {
      title: 'Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar ',
      orgSp: 3,
      sp: 4,
      link: 'https://ja.wikipedia.org/wiki/Foobar',
    },
    {
      title: 'Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar ',
      orgSp: 3,
      sp: 4,
      link: 'https://ja.wikipedia.org/wiki/Foobar',
    },
    {
      title: 'Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar ',
      orgSp: 3,
      sp: 4,
      link: 'https://ja.wikipedia.org/wiki/Foobar',
    },
    {
      title: 'Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar ',
      orgSp: 3,
      sp: 4,
      link: 'https://ja.wikipedia.org/wiki/Foobar',
    },
    {
      title: 'Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar ',
      orgSp: 3,
      sp: 4,
      link: 'https://ja.wikipedia.org/wiki/Foobar',
    },
    {
      title: 'Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar ',
      orgSp: 3,
      sp: 4,
      link: 'https://ja.wikipedia.org/wiki/Foobar',
    },
    {
      title: 'Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar ',
      orgSp: 3,
      sp: 4,
      link: 'https://ja.wikipedia.org/wiki/Foobar',
    },
    {
      title: 'Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar ',
      orgSp: 3,
      sp: 4,
      link: 'https://ja.wikipedia.org/wiki/Foobar',
    },
    {
      title: 'Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar ',
      orgSp: 3,
      sp: 4,
      link: 'https://ja.wikipedia.org/wiki/Foobar',
    },
    {
      title: 'Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar ',
      orgSp: 3,
      sp: 4,
      link: 'https://ja.wikipedia.org/wiki/Foobar',
    },
    {
      title: 'Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar ',
      orgSp: 3,
      sp: 4,
      link: 'https://ja.wikipedia.org/wiki/Foobar',
    },
    {
      title: 'Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar ',
      orgSp: 3,
      sp: 4,
      link: 'https://ja.wikipedia.org/wiki/Foobar',
    },
    {
      title: 'Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar ',
      orgSp: 3,
      sp: 4,
      link: 'https://ja.wikipedia.org/wiki/Foobar',
    },
    {
      title: 'Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar ',
      orgSp: 3,
      sp: 4,
      link: 'https://ja.wikipedia.org/wiki/Foobar',
    },
    {
      title: 'Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar ',
      orgSp: 3,
      sp: 4,
      link: 'https://ja.wikipedia.org/wiki/Foobar',
    },
    {
      title: 'Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar ',
      orgSp: 3,
      sp: 4,
      link: 'https://ja.wikipedia.org/wiki/Foobar',
    },
    {
      title: 'Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar ',
      orgSp: 3,
      sp: 4,
      link: 'https://ja.wikipedia.org/wiki/Foobar',
    },
    {
      title: 'Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar ',
      orgSp: 3,
      sp: 4,
      link: 'https://ja.wikipedia.org/wiki/Foobar',
    },
    {
      title: 'Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar ',
      orgSp: 3,
      sp: 4,
      link: 'https://ja.wikipedia.org/wiki/Foobar',
    },
    {
      title: 'Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar ',
      orgSp: 3,
      sp: 4,
      link: 'https://ja.wikipedia.org/wiki/Foobar',
    },
    {
      title: 'Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar ',
      orgSp: 3,
      sp: 4,
      link: 'https://ja.wikipedia.org/wiki/Foobar',
    },
    {
      title: 'Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar ',
      orgSp: 3,
      sp: 4,
      link: 'https://ja.wikipedia.org/wiki/Foobar',
    },
    {
      title: 'Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar ',
      orgSp: 3,
      sp: 4,
      link: 'https://ja.wikipedia.org/wiki/Foobar',
    },
    {
      title: 'Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar ',
      orgSp: 3,
      sp: 4,
      link: 'https://ja.wikipedia.org/wiki/Foobar',
    },
    {
      title: 'Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar ',
      orgSp: 3,
      sp: 4,
      link: 'https://ja.wikipedia.org/wiki/Foobar',
    },
    {
      title: 'Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar ',
      orgSp: 3,
      sp: 4,
      link: 'https://ja.wikipedia.org/wiki/Foobar',
    },
    {
      title: 'Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar ',
      orgSp: 3,
      sp: 4,
      link: 'https://ja.wikipedia.org/wiki/Foobar',
    },
    {
      title: 'Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar ',
      orgSp: 3,
      sp: 4,
      link: 'https://ja.wikipedia.org/wiki/Foobar',
    },
    {
      title: 'Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar ',
      orgSp: 3,
      sp: 4,
      link: 'https://ja.wikipedia.org/wiki/Foobar',
    },
    {
      title: 'Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar ',
      orgSp: 3,
      sp: 4,
      link: 'https://ja.wikipedia.org/wiki/Foobar',
    },
    {
      title: 'Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar ',
      orgSp: 3,
      sp: 4,
      link: 'https://ja.wikipedia.org/wiki/Foobar',
    },
    {
      title: 'Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar ',
      orgSp: 3,
      sp: 4,
      link: 'https://ja.wikipedia.org/wiki/Foobar',
    },
    {
      title: 'Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar ',
      orgSp: 3,
      sp: 4,
      link: 'https://ja.wikipedia.org/wiki/Foobar',
    },
    {
      title: 'Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar ',
      orgSp: 3,
      sp: 4,
      link: 'https://ja.wikipedia.org/wiki/Foobar',
    },
    {
      title: 'Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar ',
      orgSp: 3,
      sp: 4,
      link: 'https://ja.wikipedia.org/wiki/Foobar',
    },
    {
      title: 'Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar ',
      orgSp: 3,
      sp: 4,
      link: 'https://ja.wikipedia.org/wiki/Foobar',
    },
    {
      title: 'Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar ',
      orgSp: 3,
      sp: 4,
      link: 'https://ja.wikipedia.org/wiki/Foobar',
    },
    {
      title: 'Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar ',
      orgSp: 3,
      sp: 4,
      link: 'https://ja.wikipedia.org/wiki/Foobar',
    },
    {
      title: 'Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar ',
      orgSp: 3,
      sp: 4,
      link: 'https://ja.wikipedia.org/wiki/Foobar',
    },
    {
      title: 'Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar ',
      orgSp: 3,
      sp: 4,
      link: 'https://ja.wikipedia.org/wiki/Foobar',
    },
    {
      title: 'Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar ',
      orgSp: 3,
      sp: 4,
      link: 'https://ja.wikipedia.org/wiki/Foobar',
    },
    {
      title: 'Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar Foo bar ',
      orgSp: 3,
      sp: 4,
      link: 'https://ja.wikipedia.org/wiki/Foobar',
    },
    {
      title: 'ほげぴよほげぴよほげぴよほげぴよほげぴよ',
      orgSp: 3,
      // link: 'https://ja.wikipedia.org/wiki/Foobar',
    },
  ];

  constructor() {
    inject(ActivatedRoute).queryParamMap.pipe(
      map(q => {
        return JSON.parse(q.get('d') ?? '[]');
      }),
      // TODO Error Handling
      tap(s => console.log(s)),
    ).subscribe(stories => {
      this.stories.add(...stories);
    });
    effect(() => {
      console.log(this.stories().map(s => s()));
    });
  }

  async copyURL() {
    const d = this.stories.encode();
    const url = [location.protocol, '//', location.host, location.pathname, '?d=', d].join('');
    console.log(url);
    console.log(url.length);

    await navigator.clipboard.writeText(url);
  }

  openAddDialog() {
    this.dialog.open<any, any, PrimitiveStory | undefined>(StoryFormDialogComponent, {
      width: '90%',
    }).afterClosed().subscribe(result => {
      if (result == null) { return; }
      this.stories.add(result);
    });
  }
}
