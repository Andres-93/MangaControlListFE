import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './view/navbar/navbar.component';
import { MangaListComponent } from './view/manga-list/manga-list.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NavbarModuleModule } from './view/navbar/navbar-module.module';
import {MatCardModule} from '@angular/material/card';
import { MangaCardComponent } from './view/manga-card/manga-card.component';
import { HttpClientModule } from '@angular/common/http';
import { AddMangaComponent } from './view/add-manga/add-manga.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MangaListComponent,
    MangaCardComponent,
    AddMangaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    NavbarModuleModule,
    MatCardModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
