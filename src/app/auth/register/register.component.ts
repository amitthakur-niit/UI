import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatDatepicker } from '@angular/material';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  formGroup: FormGroup;
  required: string = 'This field is required';
  datepicker: MatDatepicker<Date>;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    let name_regexg = "";
    let number_regex = "";
    this.formGroup = this.formBuilder.group({
      'firstName': new FormControl([null, Validators.required, Validators.minLength(3), Validators.pattern(name_regexg)]),
      'lastName': new FormControl([null, Validators.required, Validators.minLength(3), Validators.pattern(name_regexg)]),
      'dateOfBirth': new FormControl([null, Validators.required]),
      'email': new FormControl([null, Validators.required, Validators.minLength(3), Validators.pattern(name_regexg)]),
      'password': new FormControl([null, Validators.required, Validators.minLength(3), Validators.pattern(name_regexg)]),
      'cnfPassword': new FormControl([null, Validators.required, Validators.minLength(3), Validators.pattern(name_regexg)]),
      'securityQuestion':[null,Validators.required],
      'answer': new FormControl([null, Validators.required, Validators.minLength(3), Validators.pattern(name_regexg)]),
    //  'singleOrJoint':[null,Validators.required],
    });

  }

  questions: any[] = [
    {value: 'pet', viewValue: 'Name of your pet'},
    {value: 'school', viewValue: 'Name of your first school'},
    {value: 'novel', viewValue: 'Name of the first novel you read'}
  ];

  options: string[] = ['Single', 'Joint'];

onSubmit(data:any){

  //this.coreService.regi

console.log(data);
}

}
