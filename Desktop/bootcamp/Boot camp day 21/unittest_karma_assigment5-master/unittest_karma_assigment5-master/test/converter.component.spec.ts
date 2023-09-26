import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ConverterComponent } from '../src/app/converter/converter.component';
import { CurrencyService } from 'src/app/currency.service';
import { baseEurExchangeRates, usdToInr } from './return-data';
import { of } from 'rxjs';
import { ToastrModule } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComparatorComponent } from 'src/app/comparator/comparator.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ConverterComponent', () => {
  let component: ConverterComponent;
  let fixture: ComponentFixture<ConverterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports:[BrowserAnimationsModule,
        ToastrModule.forRoot(
          {
            positionClass: 'toast-bottom-right',
            preventDuplicates: true,
            maxOpened: 1,
            closeButton: true
          }
        ),
        ReactiveFormsModule,
        HttpClientTestingModule,],
      declarations: [ConverterComponent,ComparatorComponent],
      providers:[]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConverterComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    // Testcase to check component existence
    expect(component).toBeTruthy();
  });

  it('should have getCurrencyList()', () => {
    // Testcase to check function existence
    expect(component.getCurrencyList).toBeTruthy()
  });

  it('should have convert()', () => {
    // Testcase to check function existence
    expect(component.convert).toBeTruthy()
  });

  it('getCurrencyList() should return the list of currencies', () => {
    // Testcase to check whether the function returns exchange rates for a base currency 'EUR'
    // Use spyOn to give a value('baseEurExchangeRates') from return-data.ts when a function of service is called
    const currencyService=TestBed.inject(CurrencyService)
    // Spying on the getCurrencyList method so that it can return the values we want
    spyOn(currencyService,'getCurrencyList').and.returnValue(of(baseEurExchangeRates))

    component.getCurrencyList()
    
    expect(component.currencyList).not.toContain('EUR')
  });

  it('convert() given values should return the exchange rate for the required currency', () => {
    // Testcase to check whether the function returns exchange rate for from currency 'USD' and to currency 'INR'
    // Use spyOn to give a value('usdToInr') from return-data.ts when a function of service is called
    const currencyService=TestBed.inject(CurrencyService)
    // Setting the values of the form inputs
    component.converterForm.controls.from.setValue("USD")
    component.converterForm.controls.to.setValue("INR")
    // Spying on the getSpecificExchangeRate method so that it can return the values we want
    spyOn(currencyService,'getSpecificExchangeRate').and.returnValue(of(usdToInr))
    
    component.convert();

    expect(component.converted).toBeTruthy()
    expect(component.exchangeRate).toEqual('1 ' + usdToInr.base + '=' + usdToInr.rates.INR + ' ' + Object.keys(usdToInr.rates)[0])
  });

  it('convert() given input null should return error message and hide the exchange rate', () => {
    // Testcase to check whether the function is hidden when from currency or to currency is 'null' 
    // Settng the values of the Form inputs
    component.converterForm.controls.from.setValue(null)
    component.converterForm.controls.from.setValue('INR')
    component.convert()

    expect(component.converted).not.toBeTruthy()
    expect(component.convert).toThrowError()

    // Settng the values of the Form inputs
    component.converterForm.controls.from.setValue('USD')
    component.converterForm.controls.from.setValue(null)
    component.convert()

    expect(component.converted).not.toBeTruthy()
    expect(component.convert).toThrowError()

  });

});


