import { CategoriaService } from './../../categorias/categoria.service';
import { LivroService } from './../livro.service';
import { Component, OnInit } from '@angular/core';
import { Livro } from '../livro.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-livros-read',
  templateUrl: './livros-read.component.html',
  styleUrls: ['./livros-read.component.scss']
})
export class LivrosReadComponent implements OnInit {

  livros: Livro[] = []
  id_cat: String = ''
  id: String = ''

  displayedColumns: string[] = ['titulo', 'autor','ano', 'acoes'];
  
  constructor(private service: LivroService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id_cat = this.route.snapshot.paramMap.get('id_cat')!
    this.findAll();
    
  }

  findAll(){
    this.service.findAll().subscribe(resposta => {
    //  console.log(resposta);
      this.livros = resposta;
    })
  }

  navegarUpdate(id: any){    
    this.router.navigate([`categorias/${this.id_cat}/livros/${id}/update`])
  }

  navegarDelete(id: any){    
    this.router.navigate([`categorias/${this.id_cat}/livros/${id}/delete`])
  }
  
  navegarLivrosCreate(): void{
    this.router.navigate([`categorias/${this.id_cat}/livros/create`])
  }

}

