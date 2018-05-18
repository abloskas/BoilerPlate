import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient){
    this.getPets();
  }

  getPets(){
    return this._http.get("/pets");
  }

  addPet(pet){
    return this._http.post('/pets', pet);
  }

  getThisPet(id: string){
    console.log(`get pet by id: ${id}`)
    return this._http.get(`/pets/${id}`);
  }

  UpdatePet(id: string, pet){
    console.log(`sending update of pet request to/pets/${id}`);
    return this._http.post(`/pets/${id}`, pet);

  }

  deletePet(id: string){
    console.log(`sending delete request to pets/${id}`);
    return this._http.delete(`/pets/${id}`);
  }
}