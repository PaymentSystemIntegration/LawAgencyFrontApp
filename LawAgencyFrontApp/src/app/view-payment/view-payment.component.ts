import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-view-payment',
  templateUrl: './view-payment.component.html',
  styleUrls: ['./view-payment.component.css']
})
export class ViewPaymentComponent implements OnInit {

  form: FormGroup;
  form1: FormGroup;
  products: any;
  bankPayments: any;
  payments: any;
  card: any;
  cards: any;
  payment: any;
  answer: any;
  bankPayment: any;
  addProductBox : boolean = false;
  addCardBox : boolean = false;
  user: any = {} as any;


  constructor( private formBuilder : FormBuilder,
    private router: Router,
    private api: ApiService,
    private _snackBar: MatSnackBar) {

      this.bankPayments = [];
      this.payments = [];
      this.cards = [];


      this.form = this.formBuilder.group({
        issuerOrderId: ['', Validators.required],
        issuerTimestamp: ['', Validators.required]  
      })

      this.form1 = this.formBuilder.group({
        id: ['', Validators.required]   
      })
    }

  images: any;

  ngOnInit(): void {


    this.api.current().subscribe((response:any) => {
      this.user = response;
  });

  this.api.loadLatestCard().subscribe((response:any) => {
    this.card = response;
    console.log(response)

    this.form1.setValue({
      id: this.card.id
    
    });

  });

  this.api.loadLatestBankPaymnet().subscribe((response:any) => {
    this.bankPayment = response;
    console.log(response)

  });

  this.api.loadLatestPaymnet().subscribe((response:any) => {
    this.payment = response;
    console.log(response)

  });

  this.api.loadLatestAnswer().subscribe((response:any) => {
    this.answer = response;
    console.log(response)

  });

  }




  onSubmit() {

    console.log('test')

    const issuerOrderId = this.form.get('issuerOrderId')?.value;
    const issuerTimestamp = this.form.get('issuerTimestamp')?.value;



    let data = {
      issuerOrderId: issuerOrderId,
      issuerTimestamp: issuerTimestamp
      
    }

    this.api.addAnswer(data).subscribe((response: any) => {
        console.log(response)
        this._snackBar.open('You have successfully added answer.', 'Close', {duration: 100000});   
    });

  
}




  


logout(): void{
  localStorage.clear();
}


}