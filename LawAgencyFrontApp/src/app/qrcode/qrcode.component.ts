import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.css']
})
export class QRCodeComponent implements OnInit {

  qrCodeUrl: string = 'http://localhost:8082/api/qr-codes/c23cf320-a48c-4f6f-a495-24db4bca30f7.png'; // Zamijenite s odgovarajućim URL-om

  constructor(private http: HttpClient, 
    private formBuilder : FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private api: ApiService,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getQRCode();
  }

  getQRCode(): void {
    this.http.get(this.qrCodeUrl, { responseType: 'blob' })
      .subscribe((response: Blob) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          this.qrCodeUrl = reader.result as string;
        };
        reader.readAsDataURL(response);
      }, error => {
        console.error('Error fetching QR code:', error);
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

   
}

onSubmit() {

  console.log('test')



  this.api.editCardPayment().subscribe((response: any) => {
      console.log(response)
      this._snackBar.open('You have successfully finished payment.', 'Close', {duration: 100000});   
  });

 
}

logout(): void{
  localStorage.clear();
}

}
