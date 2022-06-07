import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { CategoriasReadComponent } from './categorias/categorias-read/categorias-read.component';
import { CategoriasCreateComponent } from './categorias/categorias-create/categorias-create.component';
import { CategoriasDeleteComponent } from './categorias/categorias-delete/categorias-delete.component';
import { CategoriasUpdateComponent } from './categorias/categorias-update/categorias-update.component';
import { LivrosCreateComponent } from './livros/livros-create/livros-create.component';
import { LivrosUpdateComponent } from './livros/livros-update/livros-update.component';
import { LivrosDeleteComponent } from './livros/livros-delete/livros-delete.component';
import { LivrosReadComponent } from './livros/livros-read/livros-read.component';
import { LivrosReadCategoriaComponent } from './livros/livros-read-categoria/livros-read-categoria.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    CategoriasReadComponent,
    CategoriasCreateComponent,
    CategoriasDeleteComponent,
    CategoriasUpdateComponent,
    LivrosReadCategoriaComponent,
    LivrosCreateComponent,
    LivrosUpdateComponent,
    LivrosDeleteComponent,
    LivrosReadComponent,
    SnackbarComponent
  ],

  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    FlexLayoutModule  
   ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
