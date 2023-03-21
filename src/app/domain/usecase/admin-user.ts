import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserGateway } from "../models/User/gateway/user-gateway";
import { User } from "../models/User/user";

@Injectable({
    providedIn: 'root'
})

export class AdminUser {
    constructor( private _userGateway : UserGateway) {}

    getUserById(id: number): Observable<User>{
        return this._userGateway.getById(id);
    }

    getAllUsers(): Observable<Array<User>>{
        return this._userGateway.getAll();
    }

    addUser(_user : User): Observable<any>{
        return this._userGateway.add(_user);
    }

    deleteUser(id: number): Observable<any>{
        return this._userGateway.delete(id);
    }

    updateUser(_user : User): Observable<any>{
        return this._userGateway.update(_user);
    }

}