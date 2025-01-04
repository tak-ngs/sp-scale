import { CdkDrag, CdkDragEnd, DragDropModule, DragRef } from '@angular/cdk/drag-drop';
import { Component, computed, ElementRef, inject, Input, viewChild } from '@angular/core';
import { GRID_WIDTH_PX } from '../app.config';
import { StoryCardComponent } from '../story-card/story-card.component';
import { StoriesModel, StorySignal } from '../story.service';

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
  boundary = viewChild.required<ElementRef<HTMLElement>>('body');

  @Input({ required: true })
  stories!: StoriesModel;

  maxY = computed(() => Math.max(...this.stories().map(s => s().y ?? 0)));

  constrainPosition: CdkDrag['constrainPosition'] = (pos, ref: DragRef<StorySignal>) => {
    const originX = this.boundary().nativeElement.getBoundingClientRect().x;
    const distance = pos.x - this.boundary().nativeElement.getBoundingClientRect().x;
    console.log(distance);

    return {
      x: originX + Math.round(distance / this.gridWidth) * this.gridWidth,
      y: pos.y,
    };
  };
  onDroped({ source, dropPoint, distance }: CdkDragEnd<StorySignal>) {
    const origin = (source.boundaryElement as HTMLElement).getBoundingClientRect();
    const correctedStoryPoint = Math.round((dropPoint.x - origin.x) / this.gridWidth);
    const data = source.data();
    source.element.nativeElement.style.transition = 'none';
    source.data.set({ sp: data.spForScale + (distance.x / this.gridWidth) });
    source.data.setY((data.y ?? 0) + distance.y);
    source.reset();

    setTimeout(() => {
      source.element.nativeElement.style.transition = '';
      source.data.set({ sp: correctedStoryPoint });
      this.stories.refinePostion();
    }, 0);
  }
}
