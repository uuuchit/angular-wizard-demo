import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormWizardModule } from "angular2-wizard";
import { AppComponent } from './app.component';
import { WizardModule } from "angularts-wizard";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormWizardModule,
    WizardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
