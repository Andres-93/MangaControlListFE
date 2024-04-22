import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MangaService {

  private apiUrl = 'https://mangalistbe-production.up.railway.app/api/mangas';

  constructor(private http: HttpClient) { }

  // Método para hacer una solicitud GET
  obtenerListaMangas(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  // Método para hacer una solicitud POST
  addMnaga(manga: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, manga);
  }
}
