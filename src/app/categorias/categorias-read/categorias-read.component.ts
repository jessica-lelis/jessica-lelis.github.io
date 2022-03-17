import { Categoria } from './../categoria.model';
import { CategoriaService } from './../categoria.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorias-read',
  templateUrl: './categorias-read.component.html',
  styleUrls: ['./categorias-read.component.scss']
})
export class CategoriasReadComponent implements OnInit {
  
  categorias: Categoria[] = []

  displayedColumns: string[] = ['id', 'descricao', 'livros', 'acoes'];
  
  constructor(private service: CategoriaService,
              private router: Router) { }

  ngOnInit(): void {
    this.findAll();
  }
 
  findAll(){
    this.service.findAll().subscribe(resposta => {
      console.log(resposta);
      this.categorias = resposta;
    })
  }
  
  navegarCategoriaCreate(){
    this.router.navigate(["categorias/create"])
  }

}
