import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  constructor(private http: HttpClient) { }
  getInfo(){
    return this.http.get('/assets/carrito.json');
  }
  
  getCafeteria(){
    return this.http.get('/assets/cafeterias.json');
  }

  getUsuario(){
    return this.http.get('/assets/usuarios.json');
  }
}
