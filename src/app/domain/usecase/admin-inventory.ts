import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Book } from "../models/Book/book";
import { InventoryGateway } from "../models/Inventory/gateway/inventory-gateway";
import { Inventory } from "../models/Inventory/inventory";

@Injectable({
    providedIn: 'root'
})

export class AdminInventory {
    constructor( private _inventoryGateway : InventoryGateway) {}

    getAllInventory(): Observable<Array<Inventory>>{
        return this._inventoryGateway.getAll();
    }

    addInventory(_inventory : Inventory): Observable<any>{
        return this._inventoryGateway.add(_inventory);
    }

    deleteInventory(id: number): Observable<any>{
        return this._inventoryGateway.delete(id);
    }

    updateInventory(_inventory : Inventory): Observable<any>{
        return this._inventoryGateway.update(_inventory);
    }

    getInventoryById(id: number): Observable<Inventory>{
        return this._inventoryGateway.getById(id);
    }

}