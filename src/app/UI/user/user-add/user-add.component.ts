import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import documents, { User } from 'src/app/domain/models/User/user';
import { AdminUser } from 'src/app/domain/usecase/admin-user';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent {
  user: User = new User();
  submitted = false;
  loading = false;
  id: string | null = null;
  titulo = 'Agregar Usuario'
  documents = new Array

  constructor(private _adminUser: AdminUser, private router: Router, private aRoute: ActivatedRoute){
    this.id = aRoute.snapshot.paramMap.get('id')
    this.documents = documents
    console.log(documents)
  }
  
  async ngOnInit(): Promise<void> {
    if(this.id != null){
      this.titulo = 'Editar Libro'
      await this._adminUser.getUserById(Number(this.id)).subscribe((res) => {
        console.log(res)
        this.user = res
        this.loading = true;
      })
    }
  }

  add(){
    if(this.id === null){  
      if(this.user){  
        this._adminUser.addUser(this.user).subscribe(() => {
          this.router.navigate(['user-list'])
        },(error) => {
          console.error(error);
        })
      }
    }else{
      if(this.user){  
        this.user.userId = Number(this.id)
        this._adminUser.updateUser(this.user).subscribe(() => {
          this.router.navigate(['user-list'])
        },(error) => {
          console.error(error);
        })
      }
    }
  }
  
}
