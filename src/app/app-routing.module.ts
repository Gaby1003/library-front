import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookAddComponent } from './UI/book/book-add/book-add.component';
import { BookListComponent } from './UI/book/book-list/book-list.component';
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
