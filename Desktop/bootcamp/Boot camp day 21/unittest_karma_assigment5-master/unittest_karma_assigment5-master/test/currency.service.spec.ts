import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { baseEurExchangeRates, baseInrExchangeRates, usdToInr } from './return-data';
import { environment } from 'src/environments/environment';
import { CurrencyService } from 'src/app/currency.service';

describe('CurrencycurrencyService', () => {
  let currencyService:CurrencyService
  let httpMock:HttpTestingController
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CurrencyService],
    });
    httpMock=TestBed.inject(HttpTestingController)
    currencyService=TestBed.inject(CurrencyService)
  });

  it('should be created', () => {
    // Testcase to check component existence
    expect(currencyService).toBeTruthy();
  });

  it('should have getCurrencyList()', () => {
    // Testcase to check function existence
    expect(currencyService.getCurrencyList).toBeTruthy();
  });

  it('should be have getSpecificExchangeRate()', () => {
    // Testcase to check function existence
    expect(currencyService.getSpecificExchangeRate).toBeTruthy
  });

  it('should be have getAllExchangeRate()', () => {
    // Testcase to check function existence
    expect(currencyService.getAllExchangeRate).toBeTruthy()
  });

  it('getCurrencyList() should return all exchange rates for base EUR', () => {
    // Testcase to check whether function returns all exchange rates for base EUR
    // Use httpTestingController to create a mock backend to return a value(baseEurExchangeRates) from return-data.ts
    currencyService.getCurrencyList().subscribe(data => {
      expect(data).toEqual(baseEurExchangeRates);
    });

    // We set the expectations for the HttpClient mock
    const req = httpMock.expectOne(environment.API_URL);
    expect(req.request.method).toEqual('GET');
    
    // Then we set the fake data to be returned by the mock
    req.flush(baseEurExchangeRates);
    
  });

  it('getSpecificExchangeRate() should return exchange rate for particular base and currency', () => {
    // Testcase to check whether function send two currencies string('USD', 'INR') to backend
    // Use httpTestingController to create a mock backend to return a value(usdToInr) from return-data.ts
    
    // Spying on the getSpecificExchangeRate method without altering its implementation
    spyOn(currencyService,'getSpecificExchangeRate').and.callThrough()

    currencyService.getSpecificExchangeRate('USD','INR').subscribe(data => {
      expect(data).toEqual(usdToInr);
    });
    
    expect(currencyService.getSpecificExchangeRate).toHaveBeenCalledWith('USD','INR')
    // We set the expectations for the HttpClient mock
    const req = httpMock.expectOne(environment.API_URL + '?base=' + 'USD' + '&symbols=' + 'INR');
    expect(req.request.method).toEqual('GET');

    // Then we set the fake data to be returned by the mock
    req.flush(usdToInr);
  });


  it('getAllExchangeRate() should return all exchange rates for particular base', () => {
    // Testcase to check whether function send a string('INR') to backend
    // Use httpTestingController to create a mock backend to return a value(baseInrExchangeRates) from return-data.ts
    // Spying on the getAllExchangeRate method without altering its implementation
    spyOn(currencyService,'getAllExchangeRate').and.callThrough()
    
    currencyService.getAllExchangeRate('INR').subscribe(data => {
      expect(data).toEqual(baseInrExchangeRates);
    });
   
    expect(currencyService.getAllExchangeRate).toHaveBeenCalledWith('INR')
    // We set the expectations for the HttpClient mock
    const req = httpMock.expectOne(environment.API_URL + '?base=' + 'INR');
    expect(req.request.method).toEqual('GET');

    // Then we set the fake data to be returned by the mock
    req.flush(baseInrExchangeRates);
  });

});
