import { Categoria } from './../categoria.model';
import { CategoriaService } from './../categoria.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-categorias-delete',
  templateUrl: './categorias-delete.component.html',
  styleUrls: ['./categorias-delete.component.scss']
})
export class CategoriasDeleteComponent implements OnInit {

   categoria: Categoria = {id:'', descricao:''}

  constructor(private service: CategoriaService, 
              private route: ActivatedRoute,
              private router: Router) { }
 

  ngOnInit(): void {
    this.categoria.id = this.route.snapshot.paramMap.get('id')!
    this.findById()
  }

  findById(): void{
    this.service.findById(this.categoria.id!).subscribe((resposta) => {
      this.categoria.descricao = resposta.descricao
      console.log(resposta)
    })
  }

  delete(): void{
    this.service.delete(this.categoria.id!).subscribe((resposta) =>{
      this.router.navigate(['categorias'])
      this.service.mensagem('Categoria deletada com sucesso!')
    }, erro => {
        this.service.mensagem(erro.error.error)
    })
    
  }

  cancel(): void{
    this.router.navigate(['categorias']);
}

}