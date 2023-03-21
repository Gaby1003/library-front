import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Book } from "../models/Book/book";
import { BookGateway } from "../models/Book/gateway/book-gateway";

@Injectable({
    providedIn: 'root'
})

export class AdminBook {
    constructor( private _bookGateway : BookGateway) {}

    getBookById(id: number): Observable<Book>{
        return this._bookGateway.getById(id);
    }

    getAllBooks(): Observable<Array<Book>>{
        return this._bookGateway.getAll();
    }

    addBook(_book : Book): Observable<any>{
        return this._bookGateway.add(_book);
    }

    deleteBook(id: number): Observable<any>{
        return this._bookGateway.delete(id);
    }

    updateBook(_book : Book): Observable<any>{
        return this._bookGateway.update(_book);
    }

    getBooks(): Observable<Book[]>{
        return this._bookGateway.getBooks();
    }

}