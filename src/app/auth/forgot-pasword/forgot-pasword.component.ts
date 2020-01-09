import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../../register.service'




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
  toggle:boolean = false;
  
    constructor(private fb: FormBuilder,
      private router: Router,private registerService: RegisterService) {
     
    }
  
    ngOnInit() {
      this.forgotPassword();
    }
  
    forgotPassword() {
      let name_regexg = "";
      let number_regex = "";
      this.forgetPasswordForm = this.fb.group({
       
        
        'email': new FormControl([null, Validators.required, Validators.minLength(3), Validators.pattern(name_regexg)]),
      });
  
    }

    onSubmit(data: any) {
     this.registerService.forgotPaswd(data).subscribe(val=>{
       if(val===1)
       {
this.toggle = true;
       }
     });
      };

     
}




