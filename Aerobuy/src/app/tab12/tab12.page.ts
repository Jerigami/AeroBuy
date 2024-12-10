import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../services/servicios.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-tab12',
  templateUrl: 'tab12.page.html',
  styleUrls: ['tab12.page.scss'],
})
export class Tab12Page implements OnInit {

  
  constructor(private serviciosService: ServiciosService) { }

  carrito!: Observable<any>;

  ngOnInit() {
    this.carrito =  this.serviciosService.getInfo();
  }

}
