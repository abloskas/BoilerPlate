import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newPet = {};
  errors = null;

  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
    this.newPet = {name: '', type: '', description: '', skill_one: '', skill_two: '', skill_three: ''};
  }

  addPet() {
    console.log("adding a new item:", this.newPet);
    const observable = this._httpService.addPet(this.newPet);
    observable.subscribe(data => {
      if(data["message"] == "Success") {
      console.log('new pet', data);
      this.newPet = {name: '', type: '', description: '', skill_one: '', skill_two: '', skill_three: ''};
      this._router.navigate(['/']);
      }
      else{
        this.errors = data["error"];
      }
    });
  }

}
