import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/domain/models/User/user';
import { AdminUser } from 'src/app/domain/usecase/admin-user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  users$: Observable<User[]>;
  users: User[];
  load: boolean = false;

  constructor(private _adminUser: AdminUser, private router: Router) {}
  

  ngOnInit(): void {
    this.users$ = this._adminUser.getAllUsers();
    this.users$.subscribe(
      (user) => {
        this.users = user;
        this.load = true;
      }
    )
    
  }

  deleteUser(id: number){
    this._adminUser.deleteteUser(id).subscribe(
      (res: any) => {
        console.log(res)
        window.location.reload();
      },(error) => {
        console.error(error);
    }
  );
  }
    


}
