import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-homepage-merchant',
  templateUrl: './homepage-merchant.component.html',
  styleUrls: ['./homepage-merchant.component.css']
})
export class HomepageMerchantComponent implements OnInit {

  form: FormGroup;
  form1: FormGroup;
  products: any;
  bankPayments: any;
  offers: any;
  id: any;
  offer: any;
  payments: any;
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
      this.offers = [];

      this.form = this.formBuilder.group({
        amount: ['', Validators.required],
        merchantOrderId: ['', Validators.required],
        merchantTimestamp: ['', Validators.required],
        userId: ['', Validators.required],
        acquirerId: ['', Validators.required]
      
      })

      this.form1 = this.formBuilder.group({
        pan: ['', Validators.required],
        cardHolderName: ['', Validators.required],
        expirationDate: ['', Validators.required],
        securityCode: ['', Validators.required],
        paymentId: ['', Validators.required]    
      })
    }

  images: any;

  ngOnInit(): void {

    this.api.getAllOffers().subscribe((response:any) => {
      this.offers = response;
  });

    this.api.current().subscribe((response:any) => {
      this.user = response;
  });

  this.api.getOffer(this.id).subscribe((response:any) => {
    this.offer = response;
});

  }




  onSubmit() {

      console.log('test')
      this.api.getOffer(this.id).subscribe((response:any) => {
        this.offer = response;
    });

      const amount = this.form.get('amount')?.value;
      const merchantOrderId = this.form.get('merchantOrderId')?.value;
      const merchantTimestamp = this.form.get('merchantTimestamp')?.value;
      const userId = this.form.get('userId')?.value;
      const acquirerId = this.form.get('acquirerId')?.value;
  

      let data = {
        amount: amount,
        merchantOrderId: merchantOrderId,
        merchantTimestamp: merchantTimestamp,
        userId: userId,
        acquirerId: acquirerId
        
      }

      this.api.addBankPayment(data).subscribe((response: any) => {
          console.log(response)
          this._snackBar.open('You have successfully started payment.', 'Close', {duration: 100000});   
      });

     location.reload();
  }

  onSave(id: number){


     this.api.getOffer(id).subscribe((response:any) => {
     this.offer = response;
     if( response != null){
       
       
     } else if(response == null){
       alert("You have successfully choosen offer")
     }
 });
 }

  onSubmit2() {

    console.log('test')

    const pan = this.form.get('pan')?.value;
    const cardHolderName = this.form.get('cardHolderName')?.value;
    const expirationDate = this.form.get('expirationDate')?.value;
    const securityCode = this.form.get('securityCode')?.value;
    const paymentId = this.form.get('paymentId')?.value;


    let data = {
      pan: pan,
      cardHolderName: cardHolderName,
      expirationDate: expirationDate,
      securityCode: securityCode,
      paymentId: paymentId
      
    }

    this.api.addCard(data).subscribe((response: any) => {
        console.log(response)
        this._snackBar.open('You have successfully added card.', 'Close', {duration: 100000});   
    });

   location.reload();
}

  onSubmit1() {

    console.log('test')


    let data = {
   
      
    }

    this.api.addPayment(data).subscribe((response: any) => {
        console.log(response)
        this._snackBar.open('You have successfully started payment.', 'Close', {duration: 100000});   
    });

   
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

  

 onSearch(){
  const searchTerm = this.form1.get('searchTerm')?.value;

  let data = {
    searchTerm: searchTerm   
  }

  this.api.filterAllProducts(data).subscribe((response: any) => {
    console.log(response);
    this.products = response;
  });
}

logout(): void{
  localStorage.clear();
}


}



