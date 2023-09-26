import { HttpClientModule } from '@angular/common/http';
import { ComparatorComponent } from './../src/app/comparator/comparator.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ConverterComponent } from './../src/app/converter/converter.component';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from '../src/app/app.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        CommonModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot({
          positionClass: 'toast-bottom-right',
          preventDuplicates: true,
          maxOpened: 1,
          closeButton: true,
        }),
        HttpClientModule
      ],
      declarations: [
        AppComponent,
        ConverterComponent,
        ComparatorComponent
      ],
    }).compileComponents();
  }));

  beforeEach(()=>{
    // Creating the fixture and app instances before each test
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
  })

  afterEach(()=>{
    // Destroying the fixture after every test
    fixture.destroy()
  })

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'currency-converter'`, () => {
    expect(app.title).toEqual('currency-converter');
  });
});
