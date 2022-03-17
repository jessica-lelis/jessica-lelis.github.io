import { LivrosCreateComponent } from './livros/livros-create/livros-create.component';
import { CategoriasReadComponent } from './categorias/categorias-read/categorias-read.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasCreateComponent } from './categorias/categorias-create/categorias-create.component';
import { CategoriasDeleteComponent } from './categorias/categorias-delete/categorias-delete.component';
import { CategoriasUpdateComponent } from './categorias/categorias-update/categorias-update.component';
import { LivrosUpdateComponent } from './livros/livros-update/livros-update.component';
import { LivrosDeleteComponent } from './livros/livros-delete/livros-delete.component';
import { LivrosReadComponent } from './livros/livros-read/livros-read.component';
import { LivrosReadCategoriaComponent } from './livros/livros-read-categoria/livros-read-categoria.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'categorias', component: CategoriasReadComponent},
  {path: 'categorias/create', component: CategoriasCreateComponent},
  {path: 'categorias/delete/:id', component: CategoriasDeleteComponent},
  {path: 'categorias/update/:id', component: CategoriasUpdateComponent},
  {path: 'categorias/:id_cat/livros', component: LivrosReadCategoriaComponent},
  {path: 'categorias/:id_cat/livros/create', component: LivrosCreateComponent},
  {path: 'categorias/:id_cat/livros/:id_livro/update', component: LivrosUpdateComponent},
  {path: 'categorias/:id_cat/livros/:id_livro/delete', component: LivrosDeleteComponent},
  {path: 'livros', component: LivrosReadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
  