import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  standalone: false, // Set to false if this component is part of a module
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public user = {
    username: '',
    password: '',
    nombre: '',
    apellido: '',
    email: '',
    telefono: ''
  };

  ngOnInit(): void {}

  formSubmit() {
    console.log(this.user);
  }
}
