import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient){
    this.getItems();
  }

  getItems(){
    return this._http.get("/items");
  }

  addItem(item){
    return this._http.post('/items', item);
  }

  getThisItem(id: string){
    console.log(`get item by id: ${id}`)
    return this._http.get(`/items/${id}`);
  }

  UpdateItem(id: string, item){
    console.log(`sending update request to/items/${id}`);
    return this._http.post(`/items/${id}`, item);

  }

  deleteItem(id: string){
    console.log(`sending delete request to items/${id}`);
    return this._http.delete(`/items/${id}`);
  }
}