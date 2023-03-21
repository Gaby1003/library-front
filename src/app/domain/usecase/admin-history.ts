import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HistoryBookGateway } from "../models/HistoryBook/gateway/history-book-gateway";
import { HistoryBook } from "../models/HistoryBook/history-book";


@Injectable({
    providedIn: 'root'
})

export class AdminHistory {
    constructor( private _historyBookGateway : HistoryBookGateway) {}

    getBookById(userId: number, bookId: number, borrowingDate: string): Observable<HistoryBook>{
        return this._historyBookGateway.getById(userId, bookId, borrowingDate);
    }

    getAllBooks(): Observable<Array<HistoryBook>>{
        return this._historyBookGateway.getAll();
    }

    getPenalty(): Observable<Array<HistoryBook>>{
        return this._historyBookGateway.getPenalty();
    }

    addBook(_historyBook : HistoryBook): Observable<any>{
        return this._historyBookGateway.add(_historyBook);
    }

    deleteBook(id: number): Observable<any>{
        return this._historyBookGateway.delete(id);
    }

    updateBook(_historyBook : HistoryBook): Observable<any>{
        return this._historyBookGateway.update(_historyBook);
    }


}