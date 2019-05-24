import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
enDis = true;
clickmeHappend=0;
  constructor() { }

  ngOnInit() {
      setTimeout(()=>{this.enDis=false},1000)
  
  }

  myfunction=()=>{

    this.clickmeHappend++;

  }
}