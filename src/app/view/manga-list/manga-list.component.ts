import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Manga } from 'src/app/models/manga';
import { MangaService } from './manga.service';

@Component({
  selector: 'app-manga-list',
  templateUrl: './manga-list.component.html',
  styleUrls: ['./manga-list.component.scss']
})
export class MangaListComponent implements OnInit{

  listaManga: Manga[] = [];


  constructor(private http: HttpClient, 
    private mangaService: MangaService
  ){

  }

  ngOnInit(): void {
     this.cargarMangas();
  }



  cargarMangas() {
    this.mangaService.obtenerListaMangas().subscribe(
      (data) => {
        this.listaManga = data.mangas;
      },
      error => {
        console.error('Error al cargar el JSON:', error);
      }
    );
  }


}


