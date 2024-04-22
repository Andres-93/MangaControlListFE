import { Component, Input, OnInit } from '@angular/core';
import { Manga } from 'src/app/models/manga';

@Component({
  selector: 'app-manga-card',
  templateUrl: './manga-card.component.html',
  styleUrls: ['./manga-card.component.scss']
})
export class MangaCardComponent implements OnInit{

  @Input() manga?: Manga ;


constructor(){

}

  ngOnInit(): void {
   
  }



}
