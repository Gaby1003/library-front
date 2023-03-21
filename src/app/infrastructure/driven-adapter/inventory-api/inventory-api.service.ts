import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from 'src/app/domain/models/Book/book';
import { InventoryGateway } from 'src/app/domain/models/Inventory/gateway/inventory-gateway';
import { Inventory } from 'src/app/domain/models/Inventory/inventory';
import url from '../../helpers/helper';

@Injectable({
  providedIn: 'root'
})
export class InventoryApiService extends InventoryGateway{

  baseURL = 'inventory/';

  constructor(private http: HttpClient) { super();}
  update(_inventory: Inventory): Observable<any> {
    return this.http.put<string>(url + this.baseURL + 'update', _inventory);
  }

  delete(id: number): Observable<any> {
    return this.http.delete<string>(url + this.baseURL+ 'delete', 
    {params: new HttpParams().set('id', id)});
  }  

  getById(id: number): Observable<Inventory> {
    console.log(id)
    return this.http.get<Inventory>(url + this.baseURL + 'getQuantityBooks', 
    {params: new HttpParams().set('id', id)});
  }

  getAll(): Observable<Inventory[]> {
    return this.http.get<Array<Inventory>>(url + this.baseURL + 'get');
  }

  add(_inventory: Inventory):Observable<any>{
    return this.http.post<string>(url + this.baseURL + 'add', _inventory);
  }

}
