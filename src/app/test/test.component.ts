import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  
  isLogin : boolean = false;
  isLogOut :boolean = true;
  List=["sample1","sample2","sample3","sample4","sample5"];
  ngOnInit() {
    
  }
  constructor(){}


}
