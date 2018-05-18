import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { variable } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  item = {name: ""};
  id: string;
  errors: null;
  private item_params: any;
    

  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
  this.item_params = this._route.params.subscribe(params =>{
    this.id = params['id'];
    this.getItem(this.id);
    console.log("id oninit", this.id);
  })
  
  }

  getItem(id: string) {
    this._httpService.getThisItem(this.id).subscribe(data => {
      console.log("edit page", data);
      if(data["message"] == "Success") {
        this.item = data["data"];
      }
    });
  }

  editItem() {
    console.log("first" + this.id);
    this._httpService.UpdateItem(this.id, this.item).subscribe(data => {
      if(data["message"] == "Success") {
        console.log('updated task', data['message']);
        this._router.navigate(['/']);
        }
        else{
          this.errors = data["error"];
        }
      });
    
  }
}