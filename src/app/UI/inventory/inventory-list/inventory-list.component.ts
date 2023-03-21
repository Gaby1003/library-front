import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Inventory } from 'src/app/domain/models/Inventory/inventory';
import { AdminInventory } from 'src/app/domain/usecase/admin-inventory';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.css']
})
export class InventoryListComponent {
  
  inventory$: Observable<Inventory[]>;
  inventory: Inventory[];
  load: boolean = false;

  constructor(private _adminInventory: AdminInventory, private router: Router) {}
  

  ngOnInit(): void {
    this.inventory$ = this._adminInventory.getAllInventory();
    this.inventory$.subscribe(
      (book) => {
        this.inventory = book;
        this.load = true;
      }
    )
    
  }

  deleteInventory(id: number){
    this._adminInventory.deleteInventory(id).subscribe(
      (res: any) => {
        console.log(res)
        window.location.reload();
      },(error) => {
        console.error(error);
    }
  );
  } 
}
