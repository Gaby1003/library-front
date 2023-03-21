import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HistoryBookGateway } from 'src/app/domain/models/HistoryBook/gateway/history-book-gateway';
import { HistoryBook } from 'src/app/domain/models/HistoryBook/history-book';
import url from '../../helpers/helper';

@Injectable({
  providedIn: 'root'
})
export class HistoryApiService  extends HistoryBookGateway{
  baseURL = 'history-books/';

  constructor(private http: HttpClient) { super();}

  update(_historyBook: HistoryBook): Observable<any> {
    return this.http.put<string>(url + this.baseURL + 'update', _historyBook);
  }

  delete(id: number): Observable<any> {
    return this.http.delete<string>(url + this.baseURL+ 'delete', 
    {params: new HttpParams().set('id', id)});
  }  

  getById(userId: number, bookId: number, borrowingDate: string): Observable<HistoryBook> {
    return this.http.get<HistoryBook>(url + this.baseURL + 'getHistory', 
    {params: new HttpParams().appendAll({'userId': userId, 'bookId': bookId, 'borrowingDate': borrowingDate})});
  }

  getAll(): Observable<HistoryBook[]> {
    return this.http.get<Array<HistoryBook>>(url + this.baseURL + 'get');
  }

  getPenalty(): Observable<HistoryBook[]> {
    return this.http.get<Array<HistoryBook>>(url + this.baseURL + 'getPenalty');
  }

  add(_historyBook: HistoryBook):Observable<any>{
    return this.http.post<string>(url + this.baseURL + 'add', _historyBook);
  }
}
