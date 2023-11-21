import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './auth.guard';

import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';




import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { FrontPageComponent } from './front-page/front-page.component';







import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';




import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';


import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSnackBarModule} from '@angular/material/snack-bar';












import { AgmCoreModule } from '@agm/core';

import { GoogleFontsLoadingDisableDirective } from 'google-fonts-loading-disable.directive';








import { ChartModule } from 'angular2-chartjs';





import { MapsComponent } from './maps/maps.component';
import { MatTableModule } from '@angular/material/table';
import { ApiService } from './api.service';





import { HomepageMerchantComponent } from './homepage-merchant/homepage-merchant.component';
import { CardPaymentComponent } from './card-payment/card-payment.component';
import { SameBankComponent } from './same-bank/same-bank.component';
import { ViewPaymentComponent } from './view-payment/view-payment.component';
import { DifferentBankComponent } from './different-bank/different-bank.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    FrontPageComponent,
    GoogleFontsLoadingDisableDirective,




   
  
 




 


 
    MapsComponent,

  

    HomepageMerchantComponent,
    CardPaymentComponent,
    SameBankComponent,
    ViewPaymentComponent,
    DifferentBankComponent

  ],

  imports: [
    ChartModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MatListModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatRadioModule,
    MatTableModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    MatSnackBarModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCkTOjUv92qCadQ4j9fN3Ez7mZHSXuyKco'
    })
   ],
   providers: [
    ApiService,
    AuthGuard
  
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule { }
