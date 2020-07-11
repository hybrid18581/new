import { Component, OnInit } from '@angular/core';
import {AfterViewInit,  Renderer2} from '@angular/core';
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.scss']
})
export class TabsComponent implements OnInit {

  

  cards = [
    {
      title: 'Card Title 1',
      description: 'not a doctor',
      buttonText: 'Button',
      img: 'https://staticseekingalpha2.a.ssl.fastly.net/images/marketing_images/fair_use_logos_products/sacl_pg_procter_gamble_logo.jpeg'
    },
    {
      title: 'Card Title 2',
      description: 'Desctript here',
      price: '5rs.',
      buttonText: 'Button',
      img: 'http://img01.ibnlive.in/ibnlive/uploads/2012/12/itc_logo.jpg'
    },
    {
      title: 'Card Title 3',
      description: 'Desctript here',
      buttonText: 'Button',
      img: 'https://images.assettype.com/afaqs/import/all/news/images/news_story_grfx/2018/08/53423/old.jpg'
    },
    {
      title: 'Card Title 4',
      description: 'Desctript here',
      buttonText: 'Button',
      img: 'https://staticseekingalpha2.a.ssl.fastly.net/images/marketing_images/fair_use_logos_products/sacl_pg_procter_gamble_logo.jpeg'
    },
    {
      title: 'Card Title 5',
      description: 'it des',
      buttonText: 'Button',
      img: 'https://logos.textgiraffe.com/logos/logo-name/Parley-designstyle-birthday-m.png'
    },
    {
      title: 'Card Title 6',
      description: 'Desctript here',
      buttonText: 'Button',
      img: 'https://images.assettype.com/afaqs/import/all/news/images/news_story_grfx/2018/08/53423/old.jpg'
    }
  ];
  slides: any = [[]];
  chunk(arr: any, chunkSize: any) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }
  ngOnInit() {
    this.slides = this.chunk(this.cards, 3);
  }
}