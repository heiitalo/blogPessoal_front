import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../model/Usuario';
import { UsuarioLoginDTO } from '../model/UsuarioLoginDTO';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  entrar(userLogin: UsuarioLoginDTO): Observable<UsuarioLoginDTO> {

    return this.http.post<UsuarioLoginDTO>('blogpo.herokuapp.com/usuarios/logar', userLogin)
  }

  cadastrar(usuario : Usuario): Observable<Usuario>{
return this.http.post<Usuario>('https://blogpessoalitalo.herokuapp.com/usuarios/salvar', usuario)
  }
}
