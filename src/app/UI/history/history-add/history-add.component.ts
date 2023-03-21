import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/domain/models/Book/book';
import { HistoryBook } from 'src/app/domain/models/HistoryBook/history-book';
import { Inventory } from 'src/app/domain/models/Inventory/inventory';
import { User } from 'src/app/domain/models/User/user';
import { AdminBook } from 'src/app/domain/usecase/admin-book';
import { AdminHistory } from 'src/app/domain/usecase/admin-history';
import { AdminUser } from 'src/app/domain/usecase/admin-user';

@Component({
  selector: 'app-history-add',
  templateUrl: './history-add.component.html',
  styleUrls: ['./history-add.component.css']
})
export class HistoryAddComponent {

  history: HistoryBook = new HistoryBook();
  submitted = false;
  loading = false;
  loadingBooks = false
  books: Book[] = [];
  users: User[] = [];
  userId: string | null = null;
  bookId: string | null = null;
  borrowingDate: string | null = null;
  titulo = 'Agregar Préstamo'

  constructor(private _adminHistory: AdminHistory, private _adminBook: AdminBook, private _adminUser: AdminUser, 
    private router: Router, private aRoute: ActivatedRoute){
    this.userId = aRoute.snapshot.paramMap.get('userId')
    this.bookId = aRoute.snapshot.paramMap.get('bookId')
    this.borrowingDate = aRoute.snapshot.paramMap.get('borrowingDate')
  }
  
  async ngOnInit(): Promise<void> {
    if(this.userId != null &&  this.bookId != null && this.borrowingDate != null){
      this.titulo = 'Editar Préstamo'
      await this._adminHistory.getBookById(Number(this.userId), Number(this.bookId), this.borrowingDate).subscribe((res) => {
        console.log(res)
        this.history = res
        this.loading = true;
        console.log("aaaa")
      })
    }else{
      await this._adminBook.getAllBooks().subscribe((res) => {
        console.log(res)
        this.books = res
        this.loadingBooks = true;
      })
      
      console.log("bbbb")
      await this._adminUser.getAllUsers().subscribe((res) => {
        console.log(res)
        this.users = res
        this.loadingBooks = true;
      })
    }

  }

  add(){
    if(this.userId === null &&  this.bookId === null && this.borrowingDate === null){  
      if(this.history){
        this.history.estimatedDeliveryDate =  new Date(this.history.borrowingDate)
        this.history.estimatedDeliveryDate.setDate(this.history.estimatedDeliveryDate.getDate() + 8)
        console.log(this.history)
        this._adminHistory.addBook(this.history).subscribe(() => {
          this.router.navigate(['history-list'])
        },(error) => {
          console.error(error);
        })
      }
    }else{
      if(this.history){  
        this._adminHistory.updateBook(this.history).subscribe(() => {
          this.router.navigate(['history-list'])
        },(error) => {
          console.error(error);
        })
      }
    }
  }
}
