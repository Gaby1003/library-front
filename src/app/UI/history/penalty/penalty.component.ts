import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HistoryBook } from 'src/app/domain/models/HistoryBook/history-book';
import { AdminHistory } from 'src/app/domain/usecase/admin-history';

@Component({
  selector: 'app-penalty',
  templateUrl: './penalty.component.html',
  styleUrls: ['./penalty.component.css']
})
export class PenaltyComponent {

  history$: Observable<HistoryBook[]>;
  history: HistoryBook[];
  load: boolean = false;

  constructor(private _adminHistory: AdminHistory, private router: Router ) {}
  

  ngOnInit(): void {
    this.history$ = this._adminHistory.getPenalty();
    this.history$.subscribe(
      (book) => {
        console.log(book  )
        this.history = book;
        this.load = true;
      }
    )
    
  }
}
