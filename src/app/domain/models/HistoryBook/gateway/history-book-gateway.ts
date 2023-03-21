import { Observable } from "rxjs";
import { HistoryBook } from "../history-book";

export abstract class HistoryBookGateway{
    abstract getAll(): Observable<Array<HistoryBook>>
    abstract add(_historyBook: HistoryBook): Observable<any>
    abstract getById(userId: number, bookId: number, borrowingDate: string): Observable<HistoryBook>
    abstract update(_historyBook: HistoryBook): Observable<any>
    abstract delete(id: number): Observable<any>
    
}