import { Component } from '@angular/core';

@Component({
  selector: 'app-scale',
  imports: [],
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
}
