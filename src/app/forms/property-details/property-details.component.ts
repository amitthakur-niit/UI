 import { Component, OnInit } from '@angular/core';
 import { FormBuilder, Validators, FormGroup,FormControl } from '@angular/forms';
 import {MatTooltipModule} from '@angular/material/tooltip';
 //import {MatButtonToggleModule} from '@angular/material/button-toggle';



 @Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.scss']
})
export class PropertyDetailsComponent implements OnInit {
   
  formGroup: FormGroup;
  required: string = 'This field is required';
  buttonClass="button_class-yes";
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
    'Postcode': new FormControl ([null,Validators.required]),
    'Address' : new FormControl ([null]),
    'PropertyType':new FormControl ([null]),
    'NumberOfBedrooms':new FormControl ([null])
    //'NumberOfBedrooms':[null,Validators.required,Validators.minLength(10),Validators.pattern(number_regex)]
  });

}


}
