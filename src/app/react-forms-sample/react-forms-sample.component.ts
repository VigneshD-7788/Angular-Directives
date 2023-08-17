import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-react-forms-sample',
  templateUrl: './react-forms-sample.component.html',
  styleUrls: ['./react-forms-sample.component.scss']
})
export class ReactFormsSampleComponent implements OnInit {
 userName:any;
 formData:any;
  ngOnInit(){
    this.formData = new FormGroup({
      userName: new FormControl("Welcome to Reactive Forms")
    });
    
  }
  constructor(){}

  OnClickSubmit(data:any){
    this.userName = data.userName;
    
  }
  }

