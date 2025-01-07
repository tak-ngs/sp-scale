import { DragDropModule } from '@angular/cdk/drag-drop';
import { Component, ElementRef, HostListener, inject, Input, output, TemplateRef, viewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { FnPipe } from '../misc/fn.pipe';
import { StoryFormDialogComponent } from '../story-form-dialog/story-form-dialog.component';
import { PrimitiveStory, StorySignal } from '../story.service';

@Component({
  selector: 'app-story-card',
  imports: [
    DragDropModule,
    FnPipe,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatMenuModule,
  ],
  templateUrl: './story-card.component.html',
  styleUrl: './story-card.component.scss',
})
export class StoryCardComponent {
  @Input()
  data!: StorySignal;
  removed = output<string>();

  #dialog = inject(MatDialog);
  handle = viewChild.required<ElementRef<HTMLDivElement>>('handle');

  @HostListener('click', ['$event'])
  onClickCard() {
    this.handle().nativeElement.focus();
  }

  editStory() {
    this.#dialog.open<any, any, PrimitiveStory | undefined>(StoryFormDialogComponent, {
      width: '90%',
      data: this.data(),
    }).afterClosed().subscribe(result => {
      if (result == null) { return; }
      this.data.set(result);
    });
  }

  removeStory(template: TemplateRef<any>) {
    this.#dialog.open(template);
  }

  round = (v: number) => Math.round(v * 2) / 2;
}
