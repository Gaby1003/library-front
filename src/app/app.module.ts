import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookListComponent } from './UI/book/book-list/book-list.component';
import { BookGateway } from './domain/models/Book/gateway/book-gateway';
import { BookApiService } from './infrastructure/driven-adapter/book-api/book-api.service';
import { BookAddComponent } from './UI/book/book-add/book-add.component';
import { SideBarComponent } from './UI/side-bar/side-bar.component';
import { UserListComponent } from './UI/user/user-list/user-list.component';
import { UserAddComponent } from './UI/user/user-add/user-add.component';
import { UserGateway } from './domain/models/User/gateway/user-gateway';
import { UserApiService } from './infrastructure/driven-adapter/user-api/user-api.service';
import { InventoryUpdateComponent } from './UI/inventory/inventory-update/inventory-update.component';
import { InventoryListComponent } from './UI/inventory/inventory-list/inventory-list.component';
import { InventoryApiService } from './infrastructure/driven-adapter/inventory-api/inventory-api.service';
import { InventoryGateway } from './domain/models/Inventory/gateway/inventory-gateway';


registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookAddComponent,
    SideBarComponent,
    UserListComponent,
    UserAddComponent,
    InventoryUpdateComponent,
    InventoryListComponent
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
    { provide: BookGateway, useClass: BookApiService },
    { provide: UserGateway, useClass: UserApiService },
    { provide: InventoryGateway, useClass: InventoryApiService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
