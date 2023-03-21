import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/domain/models/Book/book';
import { Inventory } from 'src/app/domain/models/Inventory/inventory';
import { AdminBook } from 'src/app/domain/usecase/admin-book';
import { AdminInventory } from 'src/app/domain/usecase/admin-inventory';

@Component({
  selector: 'app-inventory-update',
  templateUrl: './inventory-update.component.html',
  styleUrls: ['./inventory-update.component.css']
})
export class InventoryUpdateComponent {

  inventory: Inventory = new Inventory();
  submitted = false;
  loading = false;
  loadingBooks = false
  books: Book[] = [];
  id: string | null = null;
  titulo = 'Agregar Inventario'
  

  constructor(private _adminInventory: AdminInventory, private _adminBook: AdminBook, 
    private router: Router, private aRoute: ActivatedRoute){
    this.id = aRoute.snapshot.paramMap.get('id')
  }
  
  async ngOnInit(): Promise<void> {
    if(this.id != null){
      this.titulo = 'Editar Libro'
      await this._adminInventory.getInventoryById(Number(this.id)).subscribe((res) => {
        console.log(res)
        this.inventory = res
        this.loading = true;
      })
    }else{
      await this._adminBook.getBooks().subscribe((res) => {
        console.log(res)
        this.books = res
        this.loadingBooks = true;
      })
    }
    
  }

  add(){
    if(this.id === null){  
      if(this.inventory){  
        this._adminInventory.addInventory(this.inventory).subscribe(() => {
          this.router.navigate(['inventory-list'])
        },(error) => {
          console.error(error);
        })
      }
    }else{
      if(this.inventory){  
        this.inventory.inventoryId = Number(this.id)
        this._adminInventory.updateInventory(this.inventory).subscribe(() => {
          this.router.navigate(['inventory-list'])
        },(error) => {
          console.error(error);
        })
      }
    }
  }
  
}
