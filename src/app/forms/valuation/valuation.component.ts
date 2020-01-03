import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-valuation',
  templateUrl: './valuation.component.html',
  styleUrls: ['./valuation.component.scss']
})
export class ValuationComponent  {

  formGroup: FormGroup;
  required: string = 'This field is required';
  constructor(private formBuilder : FormBuilder) { }

  foods:any = [
    {value: 'steak-0', viewValue: 'Current Account'},
    {value: 'pizza-1', viewValue: 'Detached Account'},
    {value: 'tacos-2', viewValue: 'Studio Appartment'}
  ];

  ngOnInit(){
    this.createForm();
  }

  createForm(){
    let name_regexg = "";
    let number_regex="";
  this.formGroup = this.formBuilder.group({

    
    'ContactPerson':[null,Validators.required],
    'ContactName' : [null,Validators.required,Validators.minLength(3),Validators.pattern(name_regexg)],
    'ContactNumber':[null,Validators.required,Validators.minLength(10),Validators.pattern(number_regex)]
  });

}

}
