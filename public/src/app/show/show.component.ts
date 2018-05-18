import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { variable } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  pets = [];
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

  getPetsFromService(){
    let observable = this._httpService.getPets();
    observable.subscribe(data => {
      console.log("Got Pets!", data)
      this.pets = data['data'];
    });
}

  getPet(id: string) {
    this._httpService.getThisPet(this.id).subscribe(data => {
      console.log("show page", data);
      console.log("got pet!");
      if(data["message"] == "Success") {
        this.pet = data["data"];
      }
    });
  }

  removePet(id: string){
    console.log("remove button working");
    console.log("deleting pet " + id);
    let observable = this._httpService.deletePet(id);
    observable.subscribe(data => {
      if(data["message"] == "Success") {
        console.log('adopted pet!', data['message']);
        this._router.navigate(['/']);
        }
        else{
          this.errors = data["error"];
        }
      
    });
  }

}
