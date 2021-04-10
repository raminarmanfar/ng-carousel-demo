import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public slides = [
    { src: './assets/01.jpeg' },
    { src: './assets/02.jpeg' },
    { src: './assets/03.jpeg' },
    { src: './assets/04.jpeg' }
  ];
}
