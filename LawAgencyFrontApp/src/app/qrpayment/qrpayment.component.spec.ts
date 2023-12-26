import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QRPaymentComponent } from './qrpayment.component';

describe('QRPaymentComponent', () => {
  let component: QRPaymentComponent;
  let fixture: ComponentFixture<QRPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QRPaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QRPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
