import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/domain/models/book';
import { AdminBook } from 'src/app/domain/usecase/admin-book';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit{

  book: Book;
  submitted = false;
  loading = false;
  id: string | null = null;
  titulo = 'Agregar Libro'

  constructor(private _adminBook: AdminBook, private router: Router, private aRoute: ActivatedRoute){
    this.id = aRoute.snapshot.paramMap.get('id')
  }
  
  ngOnInit(): void {
    if(this.id != null){
      this.titulo = 'Editar Libro'
    }
  }

  add(){
    console.log(this.book)
    this.book.bookId = null;
    this._adminBook.addBook(this.book).subscribe(() => {
      this.router.navigate(['book-list'])
    })
  }
  
}
