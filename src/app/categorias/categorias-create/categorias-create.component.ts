import { Router } from '@angular/router';
import { CategoriaService } from './../categoria.service';
import { Component, OnInit } from '@angular/core';
import { Categoria } from '../categoria.model';

@Component({
  selector: 'app-categorias-create',
  templateUrl: './categorias-create.component.html',
  styleUrls: ['./categorias-create.component.scss']
})
export class CategoriasCreateComponent implements OnInit {

  categoria: Categoria = { descricao: ''}

  constructor(private service: CategoriaService,
     private router: Router) { }

  ngOnInit(): void {
  }

create(): void{
this.service.create(this.categoria).subscribe((resposta) => {
  this.router.navigate(['categorias']);
  this.service.mensagem('Categoria criada com sucesso!');
},
  erro => {
    for(let i=0; i < erro.error.errors.length; i++){
      this.service.mensagem(erro.error.errors[i].message)
    }
  })
}

cancel(): void{
  this.router.navigate(['categorias']);
}

}
