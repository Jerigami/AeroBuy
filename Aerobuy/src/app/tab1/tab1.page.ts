import { Component } from '@angular/core';
import { ServiciosService } from '../services/servicios.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  usuario = {
    email: '',
    password: ''
  };
  constructor(private serviciosService: ServiciosService) {

  }

  Usuario!: Observable<any>;

  ngOnInit() {
    this.Usuario = this.serviciosService.getUsuario();
  }

onSubmitTemplate(){
  console.log('Form submitted');
  console.log(this.usuario);
  }
}
