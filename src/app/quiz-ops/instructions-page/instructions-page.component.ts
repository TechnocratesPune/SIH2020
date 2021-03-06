import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instructions-page',
  templateUrl: './instructions-page.component.html',
  styleUrls: ['./instructions-page.component.less']
})
export class InstructionsPageComponent implements OnInit {

  continue: boolean = false;
  hide1: boolean = true;
hide:boolean=true;
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  preview(){
    if(this.hide1)
      this.hide1 = false;
    else
      this.hide1= true;
  }
  preview1(){
    if(this.hide)
      this.hide = false;
    else
      this.hide= true;
  }
  onClick(){
    if(this.continue === false)
      this.continue = true
    else if(this.continue === true)
      this.continue = false
  }

  // proceed(){
  //   this.router.navigate(['/quiz'])
  // }
}
