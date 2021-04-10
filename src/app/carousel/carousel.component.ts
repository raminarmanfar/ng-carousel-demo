import {Component, Input, OnInit} from '@angular/core';
import {animate, style, transition, trigger, useAnimation} from '@angular/animations';
import {fadeIn, fadeOut, scaleIn, scaleOut} from './carousel.animation';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [
    trigger('carouselAnimation', [
      transition('void => *', [useAnimation(scaleIn, {params: { time: '1300ms' }} )]),
      transition('* => void', [useAnimation(scaleOut, {params: { time: '1300ms' }})]),
    ])
  ]
})
export class CarouselComponent implements OnInit {
  @Input() slides;
  currentSlide = 0;

  constructor() { }

  ngOnInit(): void {
    this.preloadImages(); // for the demo
  }

  preloadImages(): void {
    for (const slide of this.slides) {
      new Image().src = slide.src;
    }
  }

  onPreviousClick(): void {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
    console.log('previous clicked, new current slide is: ', this.currentSlide);
  }

  onNextClick(): void {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
    console.log('next clicked, new current slide is: ', this.currentSlide);
  }

}
