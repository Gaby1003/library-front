import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookAddComponent } from './UI/book/book-add/book-add.component';
import { BookListComponent } from './UI/book/book-list/book-list.component';

const routes: Routes = [
  {path: '', component: BookListComponent},
  {path: 'book-list', component: BookListComponent},
  {path: 'book-add', component: BookAddComponent},
  {path: 'book-edit/:id', component: BookAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
