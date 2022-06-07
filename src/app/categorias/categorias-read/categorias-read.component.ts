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
  id: String = ''

  displayedColumns: string[] = ['descricao', 'livros', 'acoes'];
  
  constructor(private service: CategoriaService,
              private router: Router) { }

  ngOnInit(): void {
    this.findAll();
  }
 
  findAll(){
    this.service.findAll().subscribe(resposta => {
    //  console.log(resposta);
      this.categorias = resposta;
    })
  }

  navegarUpdate(id: any){    
    this.router.navigate([`categorias/update/${id}`])
  }

  navegarDelete(id: any){    
    this.router.navigate([`categorias/delete/${id}`])
  }
  
  navegarCategoriaCreate(){
    this.router.navigate(["categorias/create"])
  }



}
