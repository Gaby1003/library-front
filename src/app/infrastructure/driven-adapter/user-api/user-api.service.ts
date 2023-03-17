import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserGateway } from 'src/app/domain/models/User/gateway/user-gateway';
import { User } from 'src/app/domain/models/User/user';
import url from '../../helpers/helper';

@Injectable({
  providedIn: 'root'
})
export class UserApiService extends UserGateway{

  baseURL = 'users/';
  
  constructor(private http: HttpClient) { super();}


  update(_user: User): Observable<any> {
    return this.http.put<string>(url + this.baseURL + 'update', _user);
  }
  delete(id: number): Observable<any> {
    return this.http.delete<string>(url + this.baseURL+ 'delete', 
    {params: new HttpParams().set('id', id)});
  }  

  getById(id: number): Observable<User> {
    console.log(id)
    return this.http.get<User>(url + this.baseURL + 'getUser', 
    {params: new HttpParams().set('id', id)});
  }

  getAll(): Observable<User[]> {
    return this.http.get<Array<User>>(url + this.baseURL + 'get');
  }

  add(_user: User):Observable<any>{
    return this.http.post<string>(url + this.baseURL + 'add', _user);
  }
}
