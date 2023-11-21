import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DifferentBankComponent } from './different-bank.component';

describe('DifferentBankComponent', () => {
  let component: DifferentBankComponent;
  let fixture: ComponentFixture<DifferentBankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DifferentBankComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DifferentBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
