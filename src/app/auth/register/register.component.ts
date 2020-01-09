import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatDatepicker } from '@angular/material';
import { RegisterService } from '../../register.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  storedSuccess: boolean = false;
  formGroup: FormGroup;
  required: string = 'This field is required.';
  lengthError: string = 'Minimum 2 characters required.';
  datepicker: MatDatepicker<Date>;
  formErrors: any;

  constructor(private formBuilder: FormBuilder, private registerService: RegisterService) {
    this.formGroup = this.formBuilder.group({
      firstName: [null, [Validators.required, Validators.minLength(2)]],
      lastName: [null, [Validators.required, Validators.minLength(2)]],
      dateOfBirth: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      cnfPassword: [null, [Validators.required, Validators.minLength(8)]],
      forgetPasswordQ: [null, Validators.required],
      forgetPasswordA: [null, [Validators.required, Validators.minLength(2)]],
    });

  }

  ngOnInit() {
    
  }

  questions: any[] = [
    { value: 'pet', viewValue: 'Name of your pet' },
    { value: 'school', viewValue: 'Name of your first school' },
    { value: 'novel', viewValue: 'Name of the first novel you read' }
  ];

  options: string[] = ['Single', 'Joint'];

  onSubmit(data: any) {
    if (data.password === data.cnfPassword) {
      this.registerService.registerData(data).subscribe(val => {
        if (val.userId != null) {
          this.storedSuccess = true;
        }
      });
    }
  }

}
