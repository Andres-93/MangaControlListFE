import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Manga } from 'src/app/models/manga';

@Injectable({
  providedIn: 'root'
})
export class MangaService {

  private apiUrl = 'https://mangalistbe-production.up.railway.app/api/mangas';

  private manga?: any;

  constructor(private http: HttpClient) { }

  // Método para hacer una solicitud GET
  obtenerListaMangas(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  // Método para hacer una solicitud POST
  addManga(manga: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, manga);
  }

   // Método para hacer una solicitud POST
   editManga(manga: any): Observable<any> {
    return this.http.put<any>(this.apiUrl + "/" + manga._id, manga);
  }


  addMangaEdicion(manga: any){
    this.manga = manga;

  }

  eliminarMangaEdicion(){
    this.manga = undefined;
  }

  obtenerMangaEdicion(){
    return this.manga;
  }
}
