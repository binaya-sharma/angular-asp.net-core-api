import { Component, OnInit } from '@angular/core';
import { PaymentDeatilService } from 'src/app/shared/payment-deatil.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

@Component({
  selector: 'app-payment-detail-form',
  templateUrl: './payment-detail-form.component.html',
  styles: [
  ]
})
export class PaymentDetailFormComponent implements OnInit {

  constructor(public service: PaymentDeatilService) { }

  ngOnInit(): void {
  }

}
