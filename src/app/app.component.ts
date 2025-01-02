import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'sp-measure';
  scales = [
    0.5,
    1,
    2,
    3,
    5,
    8,
    13,
    21,
  ];
}
