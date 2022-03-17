import { CategoriaService } from './../../categorias/categoria.service';
import { Categoria } from './../../categorias/categoria.model';
import { Livro } from './../livro.model';
import { Component, OnInit } from '@angular/core';
import { LivroService } from '../livro.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-livros-create',
  templateUrl: './livros-create.component.html',
  styleUrls: ['./livros-create.component.scss']
})
export class LivrosCreateComponent implements OnInit {

  titulo = new FormControl("", [Validators.minLength(3), Validators.maxLength(100)]);
  autor  = new FormControl("", [Validators.minLength(3), Validators.maxLength(100)]);
  ano    = new FormControl("", [Validators.required]);
  

  id_cat: any = ''
  livro: Livro = { id: '', titulo: '', autor: '', ano: '', categoria: ''}
  categorias: Categoria[]=[]

  constructor(private service: LivroService, 
    private router: Router, 
    private categoriaService: CategoriaService)
   { }

  ngOnInit(): void { 
  this.carregaCategorias();

 }

  carregaCategorias(){
   this.categoriaService.findAll().subscribe((resposta) => {
     this.categorias = resposta
   })
 }

 create(): void{
  this.service.create(this.livro, this.id_cat).subscribe((resposta) => {
    console.log(resposta)
    this.router.navigate(['livros']);
    this.service.mensagem('Livro criado com sucesso!');
 },
  erro => {
    this.router.navigate(['livros']);
    this.service.mensagem('Erro ao criar novo livro. Tente novamente mais tarde.');
  });
 } 

 cancel(): void{
  this.router.navigate([`livros`]);
 }


 getMessage(name: string){
   if(this.titulo.invalid && name == "titulo"){
     return "O campo TÍTULO deve conter entre 3 e 100 caracteres";
   }

   if(this.autor.invalid && name == "autor"){
      return "O campo AUTOR deve conter entre 3 e 100 caracteres";
   }

   if(this.ano.invalid && name == "ano"){
      return "O campo ANO deve conter os 4 dígitos";
   }

    return false;
 }



}
