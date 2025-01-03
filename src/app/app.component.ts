import { Component, computed, HostBinding, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs';
import { GRID_WIDTH_PX } from './app.config';
import { ScaleComponent } from './scale/scale.component';
import { Story } from './story';
import { StoryFormDialogComponent } from './story-form-dialog/story-form-dialog.component';

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

  storiesFromQuery = toSignal<Story[], Story[]>(
    inject(ActivatedRoute).queryParamMap.pipe(
      map(q => {
        return JSON.parse(q.get('d') ?? '[]');
        // return this.stories;
      }),
      // TODO Error Handling
      tap(s => console.log(s)),
    ),
    { initialValue: [] },
  );
  addedStories = signal<Story[]>([]);

  @HostBinding('style')
  gridWidth = `--grid-width: ${inject(GRID_WIDTH_PX)}px`;

  dummyStories: Story[] = [
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
  stories = computed(() => {
    return this.storiesFromQuery().concat(this.addedStories());
  });
  async copyURL() {
    const d = encodeURIComponent(JSON.stringify(
      this.stories().map(s => {
        delete s.y;
        return s;
      }),
    ));
    const url = [location.protocol, '//', location.host, location.pathname, '?d=', d].join('');
    console.log(url);
    console.log(url.length);

    await navigator.clipboard.writeText(url);
  }

  openAddDialog() {
    this.dialog.open<any, any, Story | undefined>(StoryFormDialogComponent, {
      width: '90%',
    }).afterClosed().subscribe(result => {
      if (result == null) { return; }
      this.addedStories.update(v => v.concat(result));
    });
  }
}
