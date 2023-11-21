import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-card-payment',
  templateUrl: './card-payment.component.html',
  styleUrls: ['./card-payment.component.css']
})
export class CardPaymentComponent implements OnInit {


  form: FormGroup;
  form1: FormGroup;
  id: any;
  products: any;
  bankPayments: any;
  payments: any;
  card: any;
  cards: any;
  addProductBox : boolean = false;
  addCardBox : boolean = false;
  user: any = {} as any;


  constructor( private formBuilder : FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private api: ApiService,
    private _snackBar: MatSnackBar) {
      this.route.queryParams
      .subscribe(params => {
        this.id = params.id;
      }
    );
      

      this.bankPayments = [];
      this.payments = [];
      this.cards = [];


      this.form = this.formBuilder.group({
        id: ['', Validators.required],
        pan: ['', Validators.required],
        cardHolderName: ['', Validators.required],
        expirationDate: ['', Validators.required],
        securityCode: ['', Validators.required],
        paymentId: ['', Validators.required]    
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

  }




  onSubmit() {

    console.log('test')

    const id = this.form.get('id')?.value;
    const pan = this.form.get('pan')?.value;
    const cardHolderName = this.form.get('cardHolderName')?.value;
    const expirationDate = this.form.get('expirationDate')?.value;
    const securityCode = this.form.get('securityCode')?.value;
    const paymentId = this.form.get('paymentId')?.value;


    let data = {
      id: id,
      pan: pan,
      cardHolderName: cardHolderName,
      expirationDate: expirationDate,
      securityCode: securityCode,
      paymentId: paymentId
      
    }

    this.api.addCard(data).subscribe((response: any) => {
        console.log(response)
        this._snackBar.open('You have successfully added card.', 'Close', {duration: 100000});   
        location.reload();
    });

  
}

  onSubmit1() {

    console.log('test')


    let data = {
   
      
    }

    this.api.addPayment(data).subscribe((response: any) => {
        console.log(response)
        this._snackBar.open('You have successfully started payment.', 'Close', {duration: 100000});   
    });

   location.reload();
}

  handleProductImage(event: any) {

    if(!event || !event.target || !event.target.files) {
      return;
    }

    this.getBase64(event, 'productImage');
  }

  handleModelImage(event: any) {

    if(!event || !event.target || !event.target.files) {
      return;
    }

    this.getBase64(event, 'modelImage');
  }

  getBase64(event:any, name: any) {
    let me = this;
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    var self = this;

    if(!this.images) {
      this.images = {};
    }

    reader.onload = function () {
      self.images[name] = reader.result;
    }
    reader.onerror = function (error) {
    };
 }

  


logout(): void{
  localStorage.clear();
}


}

