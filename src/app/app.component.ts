import { Component, effect, HostBinding, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { catchError, map, of, tap } from 'rxjs';
import { GRID_WIDTH_PX } from './app.config';
import { ScaleComponent } from './scale/scale.component';
import { StoryFormDialogComponent } from './story-form-dialog/story-form-dialog.component';
import { PrimitiveStory, stories, validatePrimitiveStory } from './story.service';

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
  #dialog = inject(MatDialog);
  #snackbar = inject(MatSnackBar);
  stories = stories();

  @HostBinding('style')
  gridWidth = `--grid-width: ${inject(GRID_WIDTH_PX)}px`;

  constructor() {
    inject(ActivatedRoute).queryParamMap.pipe(
      map<ParamMap, any[]>(q => {
        return JSON.parse(q.get('d') ?? '[]');
      }),
      map(parsed => {
        if (!Array.isArray(parsed)) {
          throw new Error();
        }
        return parsed;
      }),
      catchError(e => {
        this.#snackbar.open('Error parsing data: Invalid query in the URL.', 'Close', { verticalPosition: 'top' });
        return of([]);
      }),
    ).subscribe(stories => {
      console.log(stories);

      const filtered = stories.filter((s, i) => {
        if (validatePrimitiveStory(s)) {
          return true;
        } else {
          this.#snackbar.open(`Error parsing data: Invalid query in the URL. (index: ${i})`, 'Close', {
            verticalPosition: 'top',
          });
          return false;
        }
      });
      this.stories.add(...filtered);
    });
  }

  async copyURL() {
    const d = this.stories.encode();
    const url = [location.protocol, '//', location.host, location.pathname, '?d=', d].join('');
    console.log(url);
    console.log(url.length);

    await navigator.clipboard.writeText(url);
    this.#snackbar.open('Copied URL for this Story Point Scale', undefined, {
      verticalPosition: 'top',
      duration: 3000,
    });
  }

  openAddDialog() {
    this.#dialog.open<any, any, PrimitiveStory | undefined>(StoryFormDialogComponent, {
      width: '90%',
    }).afterClosed().subscribe(result => {
      if (result == null) { return; }
      this.stories.add(result);
    });
  }
}
