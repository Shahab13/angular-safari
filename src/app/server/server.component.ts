import { Component, OnInit } from '@angular/core';
//import enDis from '../app/app.component.ts';
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
enDis = true;
clickmeHappend=0;
myText='Click!';
myClass="btn btn-primary";
myName = '';
counter = 5

 
  constructor() { }

  ngOnInit() {
      setTimeout(()=>{this.enDis=false},1000)
  
  }

  myfunction=()=>{

    this.clickmeHappend++;
    this.myText=`You have ckicked ${this.clickmeHappend} tmes`;
    this.myClass="btn myClass";
  }
}