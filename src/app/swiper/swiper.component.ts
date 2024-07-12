import { Component } from '@angular/core';
import { Options } from 'ngx-slider-v2';
@Component({
  selector: 'swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.css']
})
export class SwiperComponent {
  currentIndex: number = 0;
  imageUrls: string[] = [
    'assets/phone.png',
    'assets/phone.png',
    'assets/phone.png',
    'assets/phone.png',
    'assets/phone.png'
  ];

  changeSlide(index: number) {
    this.currentIndex = index; // Update the current index to the clicked point
  }
}
