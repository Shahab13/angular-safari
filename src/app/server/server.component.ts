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
myText='click!';
myClass="btn btn-primary"
  constructor() { }

  ngOnInit() {
      setTimeout(()=>{this.enDis=false},1000)
  
  }

  myfunction=()=>{

    this.clickmeHappend++;
    this.myText="you have ckicked"
    this.myClass="btn btn-danger"
  }
}