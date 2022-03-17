import { Livro } from './livro.model';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../snackbar/snackbar.component';

@Injectable({
  providedIn: 'root'
})

export class LivroService {

  baseUrl: String = environment.baseUrl;
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private http: HttpClient, private _snackBar: MatSnackBar) { }

  
  findAll(): Observable<Livro[]>{
    const url = `${this.baseUrl}/livros/todos`
    return this.http.get<Livro[]>(url)
  }

  findAllByCategoria(id_cat: String): Observable<Livro[]>{
    const url = `${this.baseUrl}/livros?categoria=${id_cat}`
    return this.http.get<Livro[]>(url)
  }


  findById(id: String): Observable<Livro>{
    const url = `${this.baseUrl}/livros/${id}`
    return this.http.get<Livro>(url)
  }

  create(livro: Livro, id_cat: String): Observable<Livro>{
    const url = `${this.baseUrl}/livros?categoria=${id_cat}`
    return this.http.post<Livro>(url, livro);
  }

  update(livro: Livro, id_cat: String): Observable<Livro>{
    const url = `${this.baseUrl}/livros/${id_cat}`
    return this.http.put<Livro>(url, livro)
  }

  delete(id: String): Observable<void>{
    const url = `${this.baseUrl}/livros/${id}`
    return this.http.delete<void>(url)
  }

  mensagem(data: String){
    this._snackBar.openFromComponent(SnackbarComponent, {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      data: data,
      duration: 4000,
    });
  }

}
