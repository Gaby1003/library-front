import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/domain/models/Book/book';

import { AdminBook } from 'src/app/domain/usecase/admin-book';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit{

  book: Book = new Book();
  submitted = false;
  loading = false;
  id: string | null = null;
  titulo = 'Agregar Libro'

  constructor(private _adminBook: AdminBook, private router: Router, private aRoute: ActivatedRoute){
    this.id = aRoute.snapshot.paramMap.get('id')
  }
  
  async ngOnInit(): Promise<void> {
    if(this.id != null){
      this.titulo = 'Editar Libro'
      await this._adminBook.getBookById(Number(this.id)).subscribe((res) => {
        console.log(res)
        this.book = res
        this.loading = true;
      })
    }
  }

  add(){
    if(this.id === null){  
      if(this.book){  
        this._adminBook.addBook(this.book).subscribe(() => {
          this.router.navigate(['book-list'])
        },(error) => {
          console.error(error);
        })
      }
    }else{
      if(this.book){  
        this.book.bookId = Number(this.id)
        console.log(this.book, "aaaaaaaa")
        this._adminBook.updateBook(this.book).subscribe(() => {
          this.router.navigate(['book-list'])
        },(error) => {
          console.error(error);
        })
      }
    }
  }
  
}
