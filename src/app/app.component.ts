import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs';
import { ScaleComponent } from './scale/scale.component';
import { Story } from './story';

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
  stories = toSignal<Story[], Story[]>(
    inject(ActivatedRoute).queryParamMap.pipe(
      map(q => {
        return JSON.parse(q.get('d') ?? '[]');
        // return this.stories;
      }),
      tap(s => console.log(s)),
    ),
    { initialValue: [] },
  );
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
}
