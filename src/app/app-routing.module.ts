import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MangaListComponent } from './view/manga-list/manga-list.component';
import { AddMangaComponent } from './view/add-manga/add-manga.component';

const routes: Routes = [
  { path: '', redirectTo: '/mangaList', pathMatch: 'full' },
  { path: 'mangaList', component: MangaListComponent },
  { path: 'add-manga', component: AddMangaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
