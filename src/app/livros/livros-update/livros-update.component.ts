import { Livro } from './../livro.model';
import { Component, OnInit } from '@angular/core';
import { LivroService } from '../livro.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Categoria } from 'src/app/categorias/categoria.model';
import { CategoriaService } from 'src/app/categorias/categoria.service';

@Component({
  selector: 'app-livros-update',
  templateUrl: './livros-update.component.html',
  styleUrls: ['./livros-update.component.scss']
})
export class LivrosUpdateComponent implements OnInit {

  titulo = new FormControl("", [Validators.minLength(3), Validators.maxLength(100)]);
  autor  = new FormControl("", [Validators.minLength(3), Validators.maxLength(100)]);
  ano = new FormControl(0, [Validators.required])
  categoria = new FormControl(0, [Validators.required])
  id_cat: String = ''
  livro: Livro = { id: '', titulo: '', autor: '', ano: '', categoria: ''}
  categorias: Categoria[]=[]

  constructor(private service: LivroService, 
              private router: Router, 
              private route: ActivatedRoute, 
              private categoriaService: CategoriaService) { }

  ngOnInit(): void {  
    this.livro.id = this.route.snapshot.paramMap.get('id_livro')! 
    this.findById()
    this.carregaCategorias();
  }

  carregaCategorias(){
    this.categoriaService.findAll().subscribe((resposta) => {
      this.categorias = resposta
    })
  }

  findById(): void{
    this.service.findById(this.livro.id!).subscribe((resposta) =>{
    this.livro = resposta
   // console.log(resposta)
    })
  }

 update(): void{
   this.service.update(this.livro, this.id_cat).subscribe((resposta) => {
    this.router.navigate([`livros`]);
    this.service.mensagem('Livro atualizado com sucesso!')
   }, erro => {
    this.router.navigate([`livros`]);
    this.service.mensagem('Falha ao atualizar livro. Tente novamente mais tarde.')
   })
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

    if(this.categoria.invalid && name == "categoria"){
      return "Escolha uma Categoria";
    }

    return false;
  }

}