import { Component } from '@angular/core';

@Component({
  selector: 'app-sidnav',
  templateUrl: './sidnav.component.html',
  styleUrls: ['./sidnav.component.css']
})
export class SidnavComponent {
allowNewServer = false;

  constructor() {
    setTimeout(()=>{      
this.allowNewServer = true;
}, 2000);

  }

}
