import { Livro } from './../livro.model';
import { Component, OnInit } from '@angular/core';
import { LivroService } from '../livro.service';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-livros-delete',
  templateUrl: './livros-delete.component.html',
  styleUrls: ['./livros-delete.component.scss']
})
export class LivrosDeleteComponent implements OnInit {

  id_cat: String = ''
  livro: Livro = { id: '', titulo: '', autor: '', ano: '', categoria: ''}

  constructor(private service: LivroService, private router: Router, private route: ActivatedRoute) 
  { }

  ngOnInit(): void {  
    this.id_cat = this.route.snapshot.paramMap.get('id_cat')! 
    this.livro.id = this.route.snapshot.paramMap.get('id_livro')! 
    this.findById()
  }

  findById(): void{
    this.service.findById(this.livro.id!).subscribe((resposta) =>{
      this.livro = resposta
    })
  }

  delete(): void{
    this.service.delete(this.livro.id!).subscribe(() =>{
      this.router.navigate([`livros`]);
      this.service.mensagem('Livro deletado com sucesso!')
    }, erro => {
      this.router.navigate([`livros`]);
      this.service.mensagem('Falha ao deletar livro. Tente novamente mais tarde.')
    })

  }

  cancel(): void{
    this.router.navigate([`livros`]);
  }
}
