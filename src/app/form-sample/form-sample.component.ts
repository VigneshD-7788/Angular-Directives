import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-sample',
  templateUrl: './form-sample.component.html',
  styleUrls: ['./form-sample.component.scss']
})
export class FormSampleComponent implements OnInit {

  ngOnInit(){
    
  }
  constructor(){}

  OnClickSumbit(result:any){
    console.log("You have entered :"+result.userName)
  }

}
