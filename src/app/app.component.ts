import { Component, AfterContentInit, ViewChild } from '@angular/core';
//import WizardComponent from 'angularts-wizard/src/wizard'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  someMethod(event){
    console.log("someMethod($event)", event);
  }
  @ViewChild('wizu') wizard: any;
  ngAfterContentInit(){
    setTimeout((r)=>{this.wizard.goto(1); console.log("fgf")}, 1);
  }
}
