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
  pets = [];

  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
    this.getPetsFromService();
  }

  getPetsFromService(){
    let observable = this._httpService.getPets();
    observable.subscribe(data => {
      console.log("Got Pets!", data)
      this.pets = data['data'];
    });
}


}
