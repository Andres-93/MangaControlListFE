import { Component, Input, OnInit } from '@angular/core';
import { Manga } from 'src/app/models/manga';
import { MangaService } from '../manga-list/manga.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manga-card',
  templateUrl: './manga-card.component.html',
  styleUrls: ['./manga-card.component.scss']
})
export class MangaCardComponent implements OnInit{

  @Input() manga?: Manga ;


constructor(private mangaService: MangaService,private router: Router){

}

  ngOnInit(): void {
   
  }

  irEditar(event:any){
    this.mangaService.addMangaEdicion(this.manga);
    this.router.navigate(['/add-manga']);
  }

}
