import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MangaService } from '../manga-list/manga.service';
import { Manga } from 'src/app/models/manga';

@Component({
  selector: 'app-add-manga',
  templateUrl: './add-manga.component.html',
  styleUrls: ['./add-manga.component.scss']
})
export class AddMangaComponent {

  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder, private mangaService: MangaService) { 
    this.formulario = new FormGroup({
      titulo: new FormControl('', Validators.required),
      linkImagen: new FormControl('', Validators.required),
      linkManga: new FormControl('', Validators.required),
      linkManga2: new FormControl(''),
      descripcion: new FormControl(''),
      estado: new FormControl('Leido', Validators.required)
    });

}


guardar() {
  if (this.formulario.valid) {
      const manga: Manga = {
        link: this.formulario.value.linkManga,
        link2: this.formulario.value.linkManga2 ? this.formulario.value.linkManga2 : "", 
        urlFoto: this.formulario.value.linkImagen,
        titulo: this.formulario.value.titulo,
        descripcion: this.formulario.value.descripcion ? this.formulario.value.descripcion : "",
        estado: this.formulario.value.estado
      };
      this.mangaService.addMnaga(manga).subscribe(
        (data) => {
          console.error("guardado cone xito");
        },
        error => {
          console.error('Error al cargar el JSON:', error);
        }
      );;
    }
    
   else {
    // Si el formulario no es válido, puedes mostrar un mensaje de error o realizar alguna acción
    console.error('Formulario inválido');
  }
}

formularioEsValido() {
  return this.formulario.valid;
}
}