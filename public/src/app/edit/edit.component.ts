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
  pet = {name: '', type: '', description: '', skill_one: '', skill_two: '', skill_three: ''};
  id: string;
  errors: null;
  private pet_params: any;
    

  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
  this.pet_params = this._route.params.subscribe(params =>{
    this.id = params['id'];
    this.getPet(this.id);
    console.log("id oninit", this.id);
  })
  
  }

  getPet(id: string) {
    this._httpService.getThisPet(this.id).subscribe(data => {
      console.log("edit page", data);
      if(data["message"] == "Success") {
        this.pet = data["data"];
      }
    });
  }

  editPet() {
    console.log("first" + this.id);
    this._httpService.UpdatePet(this.id, this.pet).subscribe(data => {
      if(data["message"] == "Success") {
        console.log('updated pet', data['message']);
        this._router.navigate([`/pets/${this.id}`]);
        }
        else{
          this.errors = data["error"];
        }
      });
    
  }
}