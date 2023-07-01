import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [NgbCarouselModule, NgIf],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  
  constructor(
    config: NgbCarouselConfig
  ) { 
    config.interval = 10000;
		config.wrap = true;
		config.keyboard = true;
		config.pauseOnHover = true;
  }

  ngOnInit(): void {
  }
  

}
