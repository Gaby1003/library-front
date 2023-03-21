import { Observable } from "rxjs";
import { Book } from "../book";

export abstract class BookGateway{
    abstract getAll(): Observable<Array<Book>>
    abstract add(_book: Book): Observable<any>
    abstract getById(id: number): Observable<Book>
    abstract update(_book: Book): Observable<any>
    abstract delete(id: number): Observable<any>
    abstract getBooks(): Observable<Book[]>
    abstract getBooksAvailable(): Observable<Book[]>
    
}