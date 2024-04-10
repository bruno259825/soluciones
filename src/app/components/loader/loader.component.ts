import { Component, Input, OnInit } from '@angular/core';
import { Image, SequenceImagesEnum, SequenceImagesUtils } from '../../utils/sequenceImagesUtils';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  standalone: true
})
export class LoaderComponent implements OnInit {

  images: Image[] = [];

  currentImage!: Image;

  // default values
  @Input() interval = 3;
  @Input() timer = 12;
  @Input() sequenceOption = SequenceImagesEnum.POKEMON_FRONT;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.images = SequenceImagesUtils.getImages(this.sequenceOption);
    let imageIndex = 0;
    this.currentImage = this.images[imageIndex];

    const id = setInterval(() => {
      this.changeImage(imageIndex % this.images.length); // 0,1,2..4 
      imageIndex++;
    }, this.interval * 1000);

    setTimeout(() => {
      clearTimeout(id);
      this.router.navigate(['/pokemon']);
    }, this.timer * 1000)
  }

  changeImage(imageIndex: number) {
    this.currentImage = this.images[imageIndex];
  }


}
