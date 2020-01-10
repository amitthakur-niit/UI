import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../../register.service'
import { throwMatDialogContentAlreadyAttachedError } from '@angular/material';




@Component({
  selector: 'app-forgot-pasword',
  templateUrl: './forgot-pasword.component.html',
  styleUrls: ['./forgot-pasword.component.scss']
})
export class ForgotPaswordComponent implements OnInit {
 
  forgetPasswordForm: FormGroup;
  forgetPasswordQForm:FormGroup;
  required: string = 'This field is required';
  email:string;
  email2:String;
  question:String;
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

      this.forgetPasswordQForm = this.fb.group({
       
        'emails': new FormControl([null, Validators.required, Validators.minLength(3), Validators.pattern(name_regexg)]),
        'questions': new FormControl([null, Validators.required, Validators.minLength(3), Validators.pattern(name_regexg)]),
        'answer': new FormControl([null, Validators.required, Validators.minLength(3), Validators.pattern(name_regexg)])
      });


  
    }

    onSubmit(data: any) {
     this.registerService.forgotPaswd(data).subscribe(val=>{
       console.log(val);
       if(val!==null)
       {
         this.question=val.question;  
         this.email = val.email;
      
         this.toggle = true;
       }
     });
      };

      onSubmit2(data: any) {
        this.registerService.forgotPaswd2(data).subscribe(val=>{
          
          if(val!==null)
          {
            this.question=val.question;  
            this.email2 = val.email;
         console.log(this.email);
           
          }
        });
         };
   

     

     
}




