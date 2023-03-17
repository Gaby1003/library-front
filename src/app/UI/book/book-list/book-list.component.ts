import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Book } from 'src/app/domain/models/Book/book';
import { AdminBook } from 'src/app/domain/usecase/admin-book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit{
  
  books$: Observable<Book[]>;
  books: Book[];
  load: boolean = false;

  constructor(private _adminBook: AdminBook, private router: Router) {}
  

  ngOnInit(): void {
    this.books$ = this._adminBook.getAllBooks();
    this.books$.subscribe(
      (book) => {
        this.books = book;
        this.load = true;
      }
    )
    
  }

  deleteBook(id: number){
    this._adminBook.deleteteBook(id).subscribe(
      (res: any) => {
        console.log(res)
        window.location.reload();
      },(error) => {
        console.error(error);
    }
  );
  }
    



}
