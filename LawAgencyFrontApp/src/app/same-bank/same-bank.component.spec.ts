import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SameBankComponent } from './same-bank.component';

describe('SameBankComponent', () => {
  let component: SameBankComponent;
  let fixture: ComponentFixture<SameBankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SameBankComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SameBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
