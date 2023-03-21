import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HistoryBook } from 'src/app/domain/models/HistoryBook/history-book';
import { AdminHistory } from 'src/app/domain/usecase/admin-history';

@Component({
  selector: 'app-history-list',
  templateUrl: './history-list.component.html',
  styleUrls: ['./history-list.component.css']
})
export class HistoryListComponent {

  history$: Observable<HistoryBook[]>;
  history: HistoryBook[];
  load: boolean = false;

  constructor(private _adminHistory: AdminHistory, private router: Router) {}
  

  ngOnInit(): void {
    this.history$ = this._adminHistory.getAllBooks();
    this.history$.subscribe(
      (book) => {
        console.log(book  )
        this.history = book;
        this.load = true;
      }
    )
    
  }

}
