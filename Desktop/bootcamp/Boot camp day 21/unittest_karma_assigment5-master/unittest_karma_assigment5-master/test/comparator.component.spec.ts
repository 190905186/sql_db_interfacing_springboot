import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ComparatorComponent } from '../src/app/comparator/comparator.component';
import { CurrencyService } from 'src/app/currency.service';
import { baseUsdExchangeRates } from './return-data';
import { of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

describe('ComparatorComponent', () => {
  let component: ComparatorComponent;
  let fixture: ComponentFixture<ComparatorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule,ReactiveFormsModule],
      declarations: [ ComparatorComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    // Creating the fixture and app instances before each test
    fixture = TestBed.createComponent(ComparatorComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('should create', () => {
    // Testcase to check component existence
    expect(component).toBeTruthy();
  });

  it('should have ngOnChnages()', () => {
    // Testcase to check function existence
    expect(component.ngOnChanges).toBeTruthy()
  });

  it('ngOnChnages() should return exchangeRates', () => {
    // Testcase to check whether the function returns exchange rates for a base currency
    // Use spyOn to give a value('baseUsdExchangeRates') from return-data.ts when a function of service is called
    const currencyService=TestBed.inject(CurrencyService)

    // Spying on the getAllExchangeRate method so that it can return the values we want
    spyOn(currencyService,'getAllExchangeRate').and.returnValue(of(baseUsdExchangeRates))
  
    let valueReturned=component.ngOnChanges()
    expect(valueReturned).toBe(component.exchangeRates)
  });

});
