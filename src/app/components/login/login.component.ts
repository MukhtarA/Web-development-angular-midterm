import { Component, OnInit } from '@angular/core';
import validate = WebAssembly.validate;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  exampleEmail = 'example@mail.com';

  onSubmit(value: any){
    console.log(value);
  }
}
