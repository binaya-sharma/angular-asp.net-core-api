import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { PaymentDetailFormComponent } from './payment-details/payment-detail-form/payment-detail-form.component';
import {FormsModule} from '@angular/forms'
//ReactiveFormsModule




@NgModule({
  declarations: [
    AppComponent,
    PaymentDetailsComponent,
    PaymentDetailFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
    // ReactiveFormsModule
  ],

  // imports: [
  //   BrowserModule,
  //   FormsModule , 
  //   ReactiveFormsModule
  // ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
