import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { User } from './user';
import { AngularServicesService } from '../angular-services.service';



@Component({
  selector: 'app-forgot-pasword',
  templateUrl: './forgot-pasword.component.html',
  styleUrls: ['./forgot-pasword.component.scss']
})
export class ForgotPaswordComponent implements OnInit {
  ngOnInit(){
    
  }
  

forgetPasswordForm: FormGroup;
email:String;
user: any;

  constructor(private fb: FormBuilder,
    private service:AngularServicesService) {
    this.forgetPasswordForm = this.fb.group({
     question: [''],
     answer: ['']
     

    });
  }
  state:boolean=false;
  onSubmit() {
    this.service.getEmployees(this.email)
      .subscribe((data:any)=> {
        console.log(data);
        if(data.question!=null){
           this.state = true;
        }

  })
 

}
}
