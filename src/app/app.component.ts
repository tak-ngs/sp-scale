import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ScaleComponent } from './scale/scale.component';

@Component({
  selector: 'app-root',
  imports: [
    ScaleComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'sp-scale';
}
