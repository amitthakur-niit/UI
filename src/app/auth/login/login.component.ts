import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
   
  }

  ngOnInit() {
    this.logIn();
  }

  logIn() {
    let name_regexg = "";
    let number_regex = "";
    this.loginForm = this.fb.group({
     
      
      'email': new FormControl([null, Validators.required, Validators.minLength(3), Validators.pattern(name_regexg)]),
      'password': new FormControl([null, Validators.required, Validators.minLength(3), Validators.pattern(name_regexg)]),
    });

  }

  onSubmit() {
    console.log('jjjjjjjjjjjjj', this.loginForm.value);

  }
}
