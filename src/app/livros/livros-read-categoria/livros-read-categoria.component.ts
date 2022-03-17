import { LivroService } from '../livro.service';
import { Component, OnInit } from '@angular/core';
import { Livro } from '../livro.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-livros-read-categoria',
  templateUrl: './livros-read-categoria.component.html',
  styleUrls: ['./livros-read-categoria.component.scss']
})
export class LivrosReadCategoriaComponent implements OnInit {

  livros: Livro[] = []
  id_cat: String = ''

  displayedColumns: string[] = ['id', 'titulo', 'autor','ano', 'acoes'];
  
  constructor(private service: LivroService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id_cat = this.route.snapshot.paramMap.get('id_cat')!
    this.findAll();
  }

  findAll(){
    this.service.findAllByCategoria(this.id_cat).subscribe(resposta => {
      console.log(resposta);
      this.livros = resposta;
    })
  }
  
  navegarLivrosCreate(): void{
    this.router.navigate([`categorias/${this.id_cat}/livros/create`])
  }

  voltar(): void{
    this.router.navigate([`categorias`])
  }

}
