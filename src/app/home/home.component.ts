import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  rupendra: any;
  constructor() { }
    ngOnInit() {

    }
 myId: number = 1001
 myName : string = 'Rupee'

 getMyName() {
  return this.myName;
 }
  

}
