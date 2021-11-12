import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioLoginDTO } from '../model/UsuarioLoginDTO';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css']
})
export class EntradaComponent implements OnInit {

  userLogin: UsuarioLoginDTO = new UsuarioLoginDTO()

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  entrar(){
    this.auth.entrar(this.userLogin).subscribe((resp: UsuarioLoginDTO)=>{
      this.userLogin = resp
      this.router.navigate(['/inicio'])
    })
  }
}