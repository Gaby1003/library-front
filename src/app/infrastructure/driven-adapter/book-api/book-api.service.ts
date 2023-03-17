import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from 'src/app/domain/models/Book/book';
import { BookGateway } from 'src/app/domain/models/Book/gateway/book-gateway';
import url from '../../helpers/helper';

@Injectable({
  providedIn: 'root'
})
export class BookApiService extends BookGateway{

  baseURL = 'books/';

  constructor(private http: HttpClient) { super();}


  update(_book: Book): Observable<any> {
    throw this.http.put<string>(url + this.baseURL + 'get', {body: _book});
  }
  delete(id: number): Observable<any> {
    return this.http.delete<string>(url + this.baseURL+ 'delete', 
    {params: new HttpParams().set('id', id)});
  }  

  getById(id: number): Observable<Book> {
    console.log(id)
    return this.http.get<Book>(url + this.baseURL + 'getBook', 
    {params: new HttpParams().set('id', id)});
  }

  getAll(): Observable<Book[]> {
    return this.http.get<Array<Book>>(url + this.baseURL + 'get');
  }

  add(_book: Book):Observable<any>{
    return this.http.post<string>(url + this.baseURL + 'add', {body: _book});
  }


}
