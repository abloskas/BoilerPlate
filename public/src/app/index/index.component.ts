import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'Favorite Authors',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  items = [];

  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
    this.getItemsFromService();
  }

  getItemsFromService(){
    let observable = this._httpService.getItems();
    observable.subscribe(data => {
      console.log("Got Items!", data)
      this.items = data['data'];
    });
}

  removeItem(id: string){
    console.log("remove button working");
    console.log("deleting item " + id);
    let observable = this._httpService.deleteItem(id);
    observable.subscribe(data => {
      this.getItemsFromService();
    
    });
  }
}
