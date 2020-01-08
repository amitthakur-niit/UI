import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';




@Component({
  selector: 'app-forgot-pasword',
  templateUrl: './forgot-pasword.component.html',
  styleUrls: ['./forgot-pasword.component.scss']
})
export class ForgotPaswordComponent implements OnInit {
 
  forgetPasswordForm: FormGroup;
  required: string = 'This field is required';
  email;
  pwd;
  
    constructor(private fb: FormBuilder,
      private router: Router) {
     
    }
  
    ngOnInit() {
      this.logIn();
    }
  
    logIn() {
      let name_regexg = "";
      let number_regex = "";
      this.forgetPasswordForm = this.fb.group({
       
        
        'email': new FormControl([null, Validators.required, Validators.minLength(3), Validators.pattern(name_regexg)]),
        'pwd': new FormControl([null, Validators.required, Validators.minLength(3), Validators.pattern(name_regexg)]),
      });
  
    }
}




