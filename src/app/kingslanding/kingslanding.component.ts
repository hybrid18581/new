import { Component, OnInit } from '@angular/core';
//import {ProductDataService} from '@core/index';
@Component({
  selector: 'app-kingslanding',
  templateUrl: './kingslanding.component.html',
  styleUrls: ['./kingslanding.component.css']
})
export class KingslandingComponent implements OnInit {
    cards = [
      {
        title: 'Card Title 1',
        description: 'Some quick example text to build on the card title and make up the bulk of the card content',
        buttonText: 'Button',
        img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
      },
      {
        title: 'Card Title 2',
        description: 'Some quick example text to build on the card title and make up the bulk of the card content',
        buttonText: 'Button',
        img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
      },
      {
        title: 'Card Title 3',
        description: 'Some quick example text to build on the card title and make up the bulk of the card content',
        buttonText: 'Button',
        img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
      },
      {
        title: 'Card Title 4',
        description: 'Some quick example text to build on the card title and make up the bulk of the card content',
        buttonText: 'Button',
        img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
      },
      {
        title: 'Card Title 5',
        description: 'Some quick example text to build on the card title and make up the bulk of the card content',
        buttonText: 'Button',
        img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
      },
      {
        title: 'Card Title 6',
        description: 'Some quick example text to build on the card title and make up the bulk of the card content',
        buttonText: 'Button',
        img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
      },
      {
        title: 'Card Title 7',
        description: 'Some quick example text to build on the card title and make up the bulk of the card content',
        buttonText: 'Button',
        img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
      },
      {
        title: 'Card Title 8',
        description: 'Some quick example text to build on the card title and make up the bulk of the card content',
        buttonText: 'Button',
        img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
      },
      {
        title: 'Card Title 9',
        description: 'Some quick example text to build on the card title and make up the bulk of the card content',
        buttonText: 'Button',
        img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
      },
    ];
    ngOnInit() {}
}
