import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookListComponent } from './UI/book/book-list/book-list.component';
import { BookGateway } from './domain/models/Book/gateway/book-gateway';
import { BookApiService } from './infrastructure/driven-adapter/book-api/book-api.service';
import { BookAddComponent } from './UI/book/book-add/book-add.component';


registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    { provide: BookGateway, useClass: BookApiService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
