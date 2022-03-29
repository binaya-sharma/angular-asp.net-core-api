import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';



@Injectable({
  providedIn: 'root'
})
export class PaymentDeatilService {

  constructor() { }

  formData: PaymentDetail = new PaymentDetail();
}
