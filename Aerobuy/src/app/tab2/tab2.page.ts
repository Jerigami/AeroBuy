import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  usuarionuevo = {
    nombre:'',
    apellido:'',
    fechaNac: '',
    email:'',
    password:'',
    npassword:'',
    celular:''
  }

  
  
  constructor() {
    
  }
  
  onSubmitTemplate(){
    console.log('Form submitted');
    console.log(this.usuarionuevo);
  }
}
