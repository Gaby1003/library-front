import { Observable } from "rxjs";
import { Book } from "../../Book/book";
import { Inventory } from "../inventory";

export abstract class InventoryGateway{
    abstract getAll(): Observable<Array<Inventory>>
    abstract add(_inventory: Inventory): Observable<any>
    abstract getById(id: number): Observable<Inventory>
    abstract update(_inventory: Inventory): Observable<any>
    abstract delete(id: number): Observable<any>
    
}