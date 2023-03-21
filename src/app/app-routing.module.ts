import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookAddComponent } from './UI/book/book-add/book-add.component';
import { BookListComponent } from './UI/book/book-list/book-list.component';
import { HistoryAddComponent } from './UI/history/history-add/history-add.component';
import { HistoryListComponent } from './UI/history/history-list/history-list.component';
import { PenaltyComponent } from './UI/history/penalty/penalty.component';
import { InventoryListComponent } from './UI/inventory/inventory-list/inventory-list.component';
import { InventoryUpdateComponent } from './UI/inventory/inventory-update/inventory-update.component';
import { UserAddComponent } from './UI/user/user-add/user-add.component';
import { UserListComponent } from './UI/user/user-list/user-list.component';

const routes: Routes = [
  {path: '', component: BookListComponent},
  {path: 'book-list', component: BookListComponent},
  {path: 'book-add', component: BookAddComponent},
  {path: 'book-edit/:id', component: BookAddComponent},
  {path: 'user-list', component: UserListComponent},
  {path: 'user-add', component: UserAddComponent},
  {path: 'user-edit/:id', component: UserAddComponent},
  {path: 'inventory-list', component: InventoryListComponent},
  {path: 'inventory-add', component: InventoryUpdateComponent},
  {path: 'inventory-edit/:id', component: InventoryUpdateComponent},
  {path: 'history-list', component: HistoryListComponent},
  {path: 'history-add', component: HistoryAddComponent},
  {path: 'history-edit/:userId/:bookId/:borrowingDate', component: HistoryAddComponent},
  {path: 'penalty-list', component: PenaltyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
