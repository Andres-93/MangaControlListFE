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

  listaMangaEnviar: Manga[] = [];
  listaMangaTotal: Manga[] = [];

  titulo: string;
  estado: string;

  constructor(private http: HttpClient, 
    private mangaService: MangaService
  ){
    this.titulo = '';
    this.estado = '';
  }

  ngOnInit(): void {
     this.cargarMangas();
  }



  cargarMangas() {
    this.mangaService.obtenerListaMangas().subscribe(
      (data) => {
        this.listaMangaTotal =data.mangas; 
        this.listaMangaEnviar = data.mangas;
      },
      error => {
        console.error('Error al cargar el JSON:', error);
      }
    );
  }
  buscar() {

     if( this.titulo ==  '' &&   this.estado == ''){
      this.listaMangaEnviar =  this.listaMangaTotal;
     }else{
      
      this.listaMangaEnviar = this.listaMangaTotal.filter(manga => {
        const estadoMatches = this.estado === '' || manga.estado === this.estado;
        const tituloMatches = this.titulo === '' || (manga.titulo && manga.titulo.toLowerCase().includes(this.titulo.toLowerCase()));
        return estadoMatches && tituloMatches;
      });

  }
  }

}


