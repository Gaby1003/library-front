import { HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "../user";


export abstract class UserGateway{
    abstract getAll(): Observable<Array<User>>
    abstract add(_user: User): Observable<any>
    abstract getById(id: number): Observable<User>
    abstract update(_user: User): Observable<any>
    abstract delete(id: number): Observable<any>
    
}