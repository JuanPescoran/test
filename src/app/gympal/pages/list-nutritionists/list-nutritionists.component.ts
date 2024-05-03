import { Component } from '@angular/core';
import {GymsApiService} from "../../services/gyms-api.service";
import {Router} from "@angular/router";
import {Nutritionist} from "../../model/nutritionist.entity";

@Component({
  selector: 'app-list-nutritionists',
  templateUrl: './list-nutritionists.component.html',
  styleUrl: './list-nutritionists.component.css'
})
export class ListNutritionistsComponent {

  nutritionists: Array<Nutritionist> = [];

  constructor(private gymApi: GymsApiService, private router: Router) {
  }

  ngOnInit(){
    this.gymApi.getNutritionists()
        .subscribe((data: any)=>{
          this.nutritionists = data;
        });
  }

  onNutritionistSelected(nutritionists: any){
    this.router.navigate(['detail-nutritionist', nutritionists.id]).then();
    //});
  }

}
