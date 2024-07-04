import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MangaService } from '../manga-list/manga.service';
import { Manga } from 'src/app/models/manga';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-manga',
  templateUrl: './add-manga.component.html',
  styleUrls: ['./add-manga.component.scss']
})
export class AddMangaComponent implements OnInit{

  formulario: FormGroup;
  isEdit: boolean = false;

  constructor(private formBuilder: FormBuilder, private mangaService: MangaService,private router: Router) { 
    this.formulario = new FormGroup({
      id: new FormControl(''),
      titulo: new FormControl('', Validators.required),
      linkImagen: new FormControl('', Validators.required),
      linkManga: new FormControl('', Validators.required),
      linkManga2: new FormControl(''),
      descripcion: new FormControl(''),
      estado: new FormControl('Leido', Validators.required)
    });

}
  ngOnInit(): void {

    const mangaEdit: Manga = this.mangaService.obtenerMangaEdicion();

    if(mangaEdit){
      console.log("Hay manga editable");
      this.formulario.controls['id'].setValue(mangaEdit._id);
      this.formulario.controls['titulo'].setValue(mangaEdit.titulo);
      this.formulario.controls['linkImagen'].setValue(mangaEdit.urlFoto);
      this.formulario.controls['linkManga'].setValue(mangaEdit.link);
      this.formulario.controls['linkManga2'].setValue(mangaEdit.link2 ? mangaEdit.link2 : '');
      this.formulario.controls['descripcion'].setValue(mangaEdit.descripcion ? mangaEdit.descripcion : '');
      this.formulario.controls['estado'].setValue(mangaEdit.estado);
      this.isEdit = true;
    } 
    
  }



guardar() {
  if (this.formulario.valid) {
      const manga: Manga = {
        _id:this.formulario.value.id ? this.formulario.value.id : null,
        link: this.formulario.value.linkManga,
        link2: this.formulario.value.linkManga2 ? this.formulario.value.linkManga2 : "", 
        urlFoto: this.formulario.value.linkImagen,
        titulo: this.formulario.value.titulo,
        descripcion: this.formulario.value.descripcion ? this.formulario.value.descripcion : "",
        estado: this.formulario.value.estado
      };

if(this.isEdit){

  
  this.mangaService.editManga(manga).subscribe(
    (data) => {
      this.router.navigate(['/mangaList']);
      console.error("guardado con exito");
    },
    error => {
      console.error('Error al cargar el JSON:', error);
    }
  );

}else{

  
  this.mangaService.addManga(manga).subscribe(
    (data) => {
      this.router.navigate(['/mangaList']);
      console.error("guardado con exito");
    },
    error => {
      console.error('Error al cargar el JSON:', error);
    }
  );

}

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