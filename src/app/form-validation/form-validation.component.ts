import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.scss']
})
export class FormValidationComponent implements OnInit {
  requiredForm: FormGroup;
  constructor(private fb : FormBuilder){

    this.requiredForm = this.fb.group({
      // ... define form controls here ...
    });
    this.myForm();
  }
  // create required field validator for name
  myForm(){
    this.requiredForm = this.fb.group({
      name: ['',Validators.required]
    });
  }

  ngOnInit(){
    
  }

}
