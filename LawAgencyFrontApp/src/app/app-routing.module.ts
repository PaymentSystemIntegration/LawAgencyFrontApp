import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AuthGuard } from './auth.guard';
import { RouterModule, Routes } from '@angular/router';
import { FrontPageComponent } from './front-page/front-page.component';
import { RegistrationComponent } from './registration/registration.component';



















import { MapsComponent } from './maps/maps.component';










import { HomepageMerchantComponent } from './homepage-merchant/homepage-merchant.component';
import { CardPaymentComponent } from './card-payment/card-payment.component';
import { SameBankComponent } from './same-bank/same-bank.component';
import { DifferentBankComponent } from './different-bank/different-bank.component';
import { ViewPaymentComponent } from './view-payment/view-payment.component';
import { QRPaymentComponent } from './qrpayment/qrpayment.component';
import { QRCodeComponent } from './qrcode/qrcode.component';



const routes: Routes = [
  { path: '', component: FrontPageComponent},
  { path: "registration", component: RegistrationComponent},



  {path: "homepage-merchant", component: HomepageMerchantComponent},
  {path: "card-payment", component: CardPaymentComponent},
  {path: "same-bank", component: SameBankComponent},
  {path: "different-bank", component: DifferentBankComponent},
  {path: "view-payment", component: ViewPaymentComponent},
  {path: "qrpayment", component: QRPaymentComponent},
  {path: "qrcode", component: QRCodeComponent},










 













  { path: "maps", component: MapsComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppRoutingModule { }
