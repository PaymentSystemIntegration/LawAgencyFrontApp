import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageMerchantComponent } from './homepage-merchant.component';

describe('HomepageMerchantComponent', () => {
  let component: HomepageMerchantComponent;
  let fixture: ComponentFixture<HomepageMerchantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageMerchantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageMerchantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
