import { Component, OnInit } from '@angular/core'
import { CartService } from '../cart.service';
import { ItemsService } from '../items.service'

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
})
export class ItemListComponent implements OnInit {
  items: Array<any> = [
 
  ]

  // cdi
  constructor(private itemsService: ItemsService) { }

  ngOnInit() {

    this.itemsService.getItems()
      .subscribe({
        next: (response:any) => {
          this.items=response.items;
        }
      })

  }
}
