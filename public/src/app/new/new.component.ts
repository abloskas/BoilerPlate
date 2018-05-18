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
  newItem = {};
  errors = null;

  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
    this.newItem = {name: '' };
  }

  addItem() {
    console.log("adding a new item:", this.newItem);
    const observable = this._httpService.addItem(this.newItem);
    observable.subscribe(data => {
      if(data["message"] == "Success") {
      console.log('new item', data);
      this.newItem = { name: '' };
      this._router.navigate(['/']);
      }
      else{
        this.errors = data["error"];
      }
    });
  }

}
