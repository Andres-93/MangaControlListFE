import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MangaService } from '../manga-list/manga.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private router: Router,private mangaService: MangaService) { }


  irAddManga(){ 
    this.mangaService. eliminarMangaEdicion();
    this.router.navigate(['/add-manga']);
  }

  irListado(){
    this.router.navigate(['/mangaList']);
  }


}
